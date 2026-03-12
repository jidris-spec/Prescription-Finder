import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { db } from '../client'

export const medicinesCollection = collection(db, 'medicines')

export async function getMedicine(medicineId) {
  const docRef = doc(db, 'medicines', medicineId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function getAllMedicines() {
  const q = query(medicinesCollection, orderBy('name'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function createMedicine(data) {
  const docRef = await addDoc(medicinesCollection, {
    ...data,
    created_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateMedicine(medicineId, data) {
  const docRef = doc(db, 'medicines', medicineId)
  await updateDoc(docRef, data)
}

export async function deleteMedicine(medicineId) {
  const docRef = doc(db, 'medicines', medicineId)
  await deleteDoc(docRef)
}

export async function searchMedicines(searchTerm) {
  const medicines = await getAllMedicines()
  const term = searchTerm.toLowerCase()
  return medicines.filter(m =>
    m.name?.toLowerCase().includes(term) ||
    m.brand?.toLowerCase().includes(term) ||
    m.generic_name?.toLowerCase().includes(term) ||
    m.category?.toLowerCase().includes(term)
  )
}

export async function getAlternativeMedicines(activeSubstance, excludeId) {
  if (!activeSubstance) return []
  const q = query(
    medicinesCollection,
    where('active_substance', '==', activeSubstance)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(m => m.id !== excludeId)
}
