import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore'
import { db } from './client'

// ============ PROFILES ============
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

// ============ PHARMACIES ============
export const pharmaciesCollection = collection(db, 'pharmacies')

export async function getPharmacy(pharmacyId) {
  const docRef = doc(db, 'pharmacies', pharmacyId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function getPharmacyByUserId(userId) {
  const q = query(pharmaciesCollection, where('user_id', '==', userId))
  const snapshot = await getDocs(q)
  if (snapshot.empty) return null
  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() }
}

export async function createPharmacy(data) {
  const docRef = await addDoc(pharmaciesCollection, {
    ...data,
    verified: false,
    created_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updatePharmacy(pharmacyId, data) {
  const docRef = doc(db, 'pharmacies', pharmacyId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

export async function getAllPharmacies() {
  const snapshot = await getDocs(pharmaciesCollection)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// ============ DOCTORS ============
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
  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() }
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

// ============ MEDICINES ============
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

// ============ PHARMACY INVENTORY ============
export const inventoryCollection = collection(db, 'pharmacy_inventory')

export async function getInventoryByPharmacy(pharmacyId) {
  const q = query(
    inventoryCollection,
    where('pharmacy_id', '==', pharmacyId),
    orderBy('updated_at', 'desc')
  )
  const snapshot = await getDocs(q)
  const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  // Fetch medicine details for each item
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

// ============ PRESCRIPTIONS ============
export const prescriptionsCollection = collection(db, 'prescriptions')

export async function getPrescription(prescriptionId) {
  const docRef = doc(db, 'prescriptions', prescriptionId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function getPrescriptionsByPatient(patientId) {
  const q = query(
    prescriptionsCollection,
    where('patient_id', '==', patientId),
    orderBy('created_at', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function getPrescriptionsByDoctor(doctorId) {
  const q = query(
    prescriptionsCollection,
    where('doctor_id', '==', doctorId),
    orderBy('created_at', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function createPrescription(data) {
  const docRef = await addDoc(prescriptionsCollection, {
    ...data,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updatePrescription(prescriptionId, data) {
  const docRef = doc(db, 'prescriptions', prescriptionId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

// ============ PRESCRIPTION ITEMS ============
export const prescriptionItemsCollection = collection(db, 'prescription_items')

export async function getPrescriptionItems(prescriptionId) {
  const q = query(
    prescriptionItemsCollection,
    where('prescription_id', '==', prescriptionId)
  )
  const snapshot = await getDocs(q)
  const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  // Fetch medicine details for each item
  const itemsWithMedicines = await Promise.all(
    items.map(async (item) => {
      const medicine = await getMedicine(item.medicine_id)
      return { ...item, medicine }
    })
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

// ============ ORDERS / FULFILLMENTS ============
export const ordersCollection = collection(db, 'orders')

export async function getOrdersByPharmacy(pharmacyId) {
  const q = query(
    ordersCollection,
    where('pharmacy_id', '==', pharmacyId),
    orderBy('created_at', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function getOrdersByPatient(patientId) {
  const q = query(
    ordersCollection,
    where('patient_id', '==', patientId),
    orderBy('created_at', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function createOrder(data) {
  const docRef = await addDoc(ordersCollection, {
    ...data,
    status: 'pending',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })
  return docRef.id
}

export async function updateOrder(orderId, data) {
  const docRef = doc(db, 'orders', orderId)
  await updateDoc(docRef, { ...data, updated_at: new Date().toISOString() })
}

// ============ CONNECTIONS (Doctor-Patient) ============
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

// ============ SEARCH ============
export async function searchMedicines(searchTerm) {
  // Firestore doesn't support full-text search, so we fetch all and filter
  const medicines = await getAllMedicines()
  const term = searchTerm.toLowerCase()
  return medicines.filter(m =>
    m.name?.toLowerCase().includes(term) ||
    m.brand_name?.toLowerCase().includes(term) ||
    m.active_substance?.toLowerCase().includes(term)
  )
}

export async function searchPharmaciesWithMedicine(medicineId) {
  const q = query(
    inventoryCollection,
    where('medicine_id', '==', medicineId),
    where('quantity', '>', 0)
  )
  const snapshot = await getDocs(q)
  const inventoryItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  // Fetch pharmacy details for each item
  const results = await Promise.all(
    inventoryItems.map(async (item) => {
      const pharmacy = await getPharmacy(item.pharmacy_id)
      return { ...item, pharmacy }
    })
  )

  return results.filter(r => r.pharmacy) // Filter out items with deleted pharmacies
}
