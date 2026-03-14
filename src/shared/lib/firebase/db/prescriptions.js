import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy
} from "firebase/firestore"
import { db } from "../client"
import { getMedicine } from "./medicines"

export const prescriptionsCollection = collection(db, "prescriptions")
export const prescriptionItemsCollection = collection(db, "prescription_items")

function mapDocs(snapshot) {
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}

async function getPrescriptionsByField(field, value) {
  const q = query(
    prescriptionsCollection,
    where(field, "==", value),
    orderBy("created_at", "desc")
  )

  const snapshot = await getDocs(q)
  return mapDocs(snapshot)
}

export function getPrescriptionsByPatient(patientId) {
  return getPrescriptionsByField("patient_id", patientId)
}

export function getPrescriptionsByDoctor(doctorId) {
  return getPrescriptionsByField("doctor_id", doctorId)
}

export async function getAllActivePrescriptions() {
  const q = query(
    prescriptionsCollection,
    where("status", "==", "active"),
    orderBy("created_at", "desc")
  )

  const snapshot = await getDocs(q)
  return mapDocs(snapshot)
}

export async function getPrescription(prescriptionId) {
  const docRef = doc(db, "prescriptions", prescriptionId)
  const docSnap = await getDoc(docRef)

  return docSnap.exists()
    ? { id: docSnap.id, ...docSnap.data() }
    : null
}

export async function createPrescription(data) {
  const docRef = await addDoc(prescriptionsCollection, {
    ...data,
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })

  return docRef.id
}

export async function updatePrescription(prescriptionId, data) {
  const docRef = doc(db, "prescriptions", prescriptionId)

  await updateDoc(docRef, {
    ...data,
    updated_at: new Date().toISOString()
  })
}

export async function getPrescriptionItems(prescriptionId) {
  const q = query(
    prescriptionItemsCollection,
    where("prescription_id", "==", prescriptionId)
  )

  const snapshot = await getDocs(q)
  const items = mapDocs(snapshot)

  const itemsWithMedicines = await Promise.all(
    items.map(async (item) => ({
      ...item,
      medicine: await getMedicine(item.medicine_id)
    }))
  )

  return itemsWithMedicines
}

export async function addPrescriptionItem(data) {
  const docRef = await addDoc(prescriptionItemsCollection, {
    ...data,
    created_at: new Date().toISOString()
  })

  return docRef.id
}
