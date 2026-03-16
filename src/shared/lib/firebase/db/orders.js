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
    where(field, "==", value),
    orderBy("created_at", "desc")
  )

  const snapshot = await getDocs(q)

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
