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

export const doctorsCollection = collection(db, 'doctors')

export async function getDoctor(doctorId) {
  const docRef = doc(db, 'doctors', doctorId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function getDoctorByUserId(userId) {
  const q = query(doctorsCollection, where('user_id', '==', userId))
  const snapshot = await getDocs(q)
  if (snapshot.empty) return null
  const d = snapshot.docs[0]
  return { id: d.id, ...d.data() }
}

export async function createDoctor(data) {
  const docRef = await addDoc(doctorsCollection, {
    ...data,
    verified: false,
    created_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateDoctor(doctorId, data) {
  const docRef = doc(db, 'doctors', doctorId)
  await updateDoc(docRef, data)
}

export async function getAllDoctors() {
  const snapshot = await getDocs(doctorsCollection)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function getVerifiedDoctors() {
  const q = query(doctorsCollection, where('verified', '==', true))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
