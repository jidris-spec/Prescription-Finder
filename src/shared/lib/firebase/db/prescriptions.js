import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
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

function sortByDate(docs) {
  return docs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
}

async function getPrescriptionsByField(field, value) {
  const q = query(prescriptionsCollection, where(field, "==", value))
  const snapshot = await getDocs(q)
  return sortByDate(mapDocs(snapshot))
}

export function getPrescriptionsByPatient(patientId) {
  return getPrescriptionsByField("patient_id", patientId)
}

export function getPrescriptionsByDoctor(doctorId) {
  return getPrescriptionsByField("doctor_id", doctorId)
}

export async function getAllActivePrescriptions() {
  const q = query(prescriptionsCollection, where("status", "==", "active"))
  const snapshot = await getDocs(q)
  return sortByDate(mapDocs(snapshot))
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

  // Fetch each unique medicine_id once, then map back to items
  const uniqueIds = [...new Set(items.map(i => i.medicine_id).filter(Boolean))]
  const medicines = await Promise.all(uniqueIds.map(getMedicine))
  const medicineMap = Object.fromEntries(uniqueIds.map((id, i) => [id, medicines[i]]))

  return items.map(item => ({
    ...item,
    medicine: medicineMap[item.medicine_id] ?? null
  }))
}

/**
 * Subscribe to live prescription updates for a patient.
 * Returns an unsubscribe function — call it in useEffect cleanup.
 */
export function subscribeToPrescriptionsByPatient(patientId, callback) {
  const q = query(
    prescriptionsCollection,
<<<<<<< HEAD
    where("patient_id", "==", patientId),
    orderBy("created_at", "desc")
  )
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
=======
    where("patient_id", "==", patientId)
  )
  return onSnapshot(q, (snapshot) => {
    callback(sortByDate(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))))
>>>>>>> 2918af0 (i added dark and light mode)
  })
}

/**
 * Subscribe to live prescription updates for a doctor.
 * Returns an unsubscribe function — call it in useEffect cleanup.
 */
export function subscribeToPrescriptionsByDoctor(doctorId, callback) {
  const q = query(
    prescriptionsCollection,
<<<<<<< HEAD
    where("doctor_id", "==", doctorId),
    orderBy("created_at", "desc")
  )
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
=======
    where("doctor_id", "==", doctorId)
  )
  return onSnapshot(q, (snapshot) => {
    callback(sortByDate(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))))
>>>>>>> 2918af0 (i added dark and light mode)
  })
}

export async function addPrescriptionItem(data) {
  const docRef = await addDoc(prescriptionItemsCollection, {
    ...data,
    created_at: new Date().toISOString()
  })

  return docRef.id
}
