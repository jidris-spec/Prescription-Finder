import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../client'

export const pharmaciesCollection = collection(db, 'pharmacies')

export async function getPharmacy(pharmacyId) {
  const docRef = doc(db, 'pharmacies', pharmacyId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function getPharmacyByUserId(userId) {
  const q = query(pharmaciesCollection, where('user_id', '==', userId))
  const snapshot = await getDocs(q)
  if (snapshot.empty) return null
  const d = snapshot.docs[0]
  return { id: d.id, ...d.data() }
}

export async function createPharmacy(data) {
  const docRef = await addDoc(pharmaciesCollection, {
    ...data,
    verified: false,
    created_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updatePharmacy(pharmacyId, data) {
  const docRef = doc(db, 'pharmacies', pharmacyId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

export async function getAllPharmacies() {
  const snapshot = await getDocs(pharmaciesCollection)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
