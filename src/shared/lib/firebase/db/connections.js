import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../client'

export const connectionsCollection = collection(db, 'connections')

export async function getConnectionsByPatient(patientId) {
  const q = query(connectionsCollection, where('patient_id', '==', patientId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function getConnectionsByDoctor(doctorId) {
  const q = query(connectionsCollection, where('doctor_id', '==', doctorId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function createConnection(data) {
  const docRef = await addDoc(connectionsCollection, {
    ...data,
    status: 'pending',
    created_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateConnection(connectionId, data) {
  const docRef = doc(db, 'connections', connectionId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

export async function getConnectedPatients(doctorId) {
  const q = query(
    connectionsCollection,
    where('doctor_id', '==', doctorId),
    where('status', '==', 'approved')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
