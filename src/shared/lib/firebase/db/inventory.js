import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { db } from '../client'
import { getMedicine } from './medicines'

export const inventoryCollection = collection(db, 'pharmacy_inventory')

export async function getInventoryByPharmacy(pharmacyId) {
  const q = query(
    inventoryCollection,
    where('pharmacy_id', '==', pharmacyId),
    orderBy('updated_at', 'desc')
  )
  const snapshot = await getDocs(q)
  const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  const itemsWithMedicines = await Promise.all(
    items.map(async (item) => {
      const medicine = await getMedicine(item.medicine_id)
      return { ...item, medicines: medicine }
    })
  )

  return itemsWithMedicines
}

export async function addInventoryItem(data) {
  const docRef = await addDoc(inventoryCollection, {
    ...data,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateInventoryItem(itemId, data) {
  const docRef = doc(db, 'pharmacy_inventory', itemId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

export async function deleteInventoryItem(itemId) {
  const docRef = doc(db, 'pharmacy_inventory', itemId)
  await deleteDoc(docRef)
}

export async function searchPharmaciesWithMedicine(medicineId) {
  const { getPharmacy } = await import('./pharmacies')
  const q = query(
    inventoryCollection,
    where('medicine_id', '==', medicineId),
    where('quantity', '>', 0)
  )
  const snapshot = await getDocs(q)
  const inventoryItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  const results = await Promise.all(
    inventoryItems.map(async (item) => {
      const pharmacy = await getPharmacy(item.pharmacy_id)
      return { ...item, pharmacy }
    })
  )

  return results.filter(r => r.pharmacy)
}
