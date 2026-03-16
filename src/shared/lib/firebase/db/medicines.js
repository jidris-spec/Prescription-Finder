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

// Session-level caches to avoid redundant Firestore reads
const medicineCache = new Map()
let allMedicinesCache = null

export async function getMedicine(medicineId) {
  if (medicineCache.has(medicineId)) return medicineCache.get(medicineId)
  const docRef = doc(db, 'medicines', medicineId)
  const docSnap = await getDoc(docRef)
  const result = docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
  medicineCache.set(medicineId, result)
  return result
}

export async function getAllMedicines() {
  if (allMedicinesCache) return allMedicinesCache
  const q = query(medicinesCollection, orderBy('name'))
  const snapshot = await getDocs(q)
  const medicines = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  // Populate per-item cache so subsequent getMedicine calls are free
  medicines.forEach(m => medicineCache.set(m.id, m))
  allMedicinesCache = medicines
  return medicines
}

export async function createMedicine(data) {
  const docRef = await addDoc(medicinesCollection, {
    ...data,
    created_at: new Date().toISOString()
  })
  allMedicinesCache = null
  return docRef.id
}

export async function updateMedicine(medicineId, data) {
  const docRef = doc(db, 'medicines', medicineId)
  await updateDoc(docRef, data)
  medicineCache.delete(medicineId)
  allMedicinesCache = null
}

export async function deleteMedicine(medicineId) {
  const docRef = doc(db, 'medicines', medicineId)
  await deleteDoc(docRef)
  medicineCache.delete(medicineId)
  allMedicinesCache = null
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
