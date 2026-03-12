import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { db } from '../client'

export const ordersCollection = collection(db, 'orders')

export async function getOrdersByPharmacy(pharmacyId) {
  const q = query(
    ordersCollection,
    where('pharmacy_id', '==', pharmacyId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
}

export async function getOrdersByPatient(patientId) {
  const q = query(
    ordersCollection,
    where('patient_id', '==', patientId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
}

export async function createOrder(data) {
  const docRef = await addDoc(ordersCollection, {
    ...data,
    status: 'pending',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateOrder(orderId, data) {
  const docRef = doc(db, 'orders', orderId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}
