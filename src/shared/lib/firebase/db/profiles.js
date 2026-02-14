import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../client'

export const profilesCollection = collection(db, 'profiles')

export async function getProfile(userId) {
  const docRef = doc(db, 'profiles', userId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function updateProfile(userId, data) {
  const docRef = doc(db, 'profiles', userId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

export async function getAllProfiles() {
  const snapshot = await getDocs(profilesCollection)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
