import {
  collection,
  doc,
  addDoc,
  runTransaction,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../client'

const requestsCollection = collection(db, 'requests')

export async function createMedicineRequest(patientId, medicineQuery) {
  const docRef = await addDoc(requestsCollection, {
    patientId,
    medicineQuery,
    status: 'open',
    createdAt: new Date().toISOString(),
    claimedByPharmacyId: null,
    claimedAt: null,
    confirmedAt: null,
  })
  return docRef.id
}

export async function claimRequest(requestId, pharmacyId, pharmacyName) {
  const requestRef = doc(db, 'requests', requestId)
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(requestRef)
    if (!snap.exists()) throw new Error('Request not found')
    if (snap.data().status !== 'open') throw new Error('Request is no longer available')
    tx.update(requestRef, {
      status: 'claimed',
      claimedByPharmacyId: pharmacyId,
      claimedByPharmacyName: pharmacyName || null,
      claimedAt: new Date().toISOString(),
    })
  })
}

export async function confirmRequest(requestId, pharmacyId) {
  const requestRef = doc(db, 'requests', requestId)
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(requestRef)
    if (!snap.exists()) throw new Error('Request not found')
    const data = snap.data()
    if (data.status !== 'claimed') throw new Error('Request is not in claimed state')
    if (data.claimedByPharmacyId !== pharmacyId) throw new Error('This request is not claimed by you')
    tx.update(requestRef, {
      status: 'confirmed',
      confirmedAt: new Date().toISOString(),
    })
  })
}

// orderBy removed — avoids requiring a Firestore composite index
export function subscribeToOpenRequests(callback) {
  const q = query(requestsCollection, where('status', '==', 'open'))
  return onSnapshot(
    q,
    (snap) => {
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      docs.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
      callback(docs)
    },
    (err) => console.error('subscribeToOpenRequests error:', err)
  )
}

export function subscribeToMyRequests(patientId, callback) {
  const q = query(requestsCollection, where('patientId', '==', patientId))
  return onSnapshot(
    q,
    (snap) => {
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      docs.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      callback(docs)
    },
    (err) => console.error('subscribeToMyRequests error:', err)
  )
}

export function subscribeToClaimedByPharmacy(pharmacyId, callback) {
  const q = query(
    requestsCollection,
    where('claimedByPharmacyId', '==', pharmacyId)
  )
  return onSnapshot(
    q,
    (snap) => callback(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => console.error('subscribeToClaimedByPharmacy error:', err)
  )
}
