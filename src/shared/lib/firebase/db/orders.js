import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore"
import { db } from "../client"

export const ordersCollection = collection(db, "orders")

async function getOrdersByField(field, value) {
  const q = query(
    ordersCollection,
<<<<<<< Updated upstream
    where(field, "==", value),
    orderBy("created_at", "desc")
=======
    where('pharmacy_id', '==', pharmacyId)
>>>>>>> Stashed changes
  )

  const snapshot = await getDocs(q)
<<<<<<< Updated upstream

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export function getOrdersByPharmacy(pharmacyId) {
  return getOrdersByField("pharmacy_id", pharmacyId)
}

export function getOrdersByPatient(patientId) {
  return getOrdersByField("patient_id", patientId)
=======
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
>>>>>>> Stashed changes
}

export async function createOrder(data) {
  const docRef = await addDoc(ordersCollection, {
    ...data,
    status: "pending",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })

  return docRef.id
}

export async function updateOrder(orderId, data) {
  const docRef = doc(db, "orders", orderId)

  await updateDoc(docRef, {
    ...data,
    updated_at: new Date().toISOString(),
  })
}
