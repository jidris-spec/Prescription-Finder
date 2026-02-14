import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../client'

export const doseLogsCollection = collection(db, 'dose_logs')

export async function getDoseLogsByPatient(patientId, date) {
  const dateStr = date instanceof Date
    ? date.toISOString().split('T')[0]
    : date
  const q = query(
    doseLogsCollection,
    where('patient_id', '==', patientId),
    where('date', '==', dateStr)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function createDoseLog(data) {
  const docRef = await addDoc(doseLogsCollection, {
    ...data,
    created_at: new Date().toISOString()
  })
  return docRef.id
}
