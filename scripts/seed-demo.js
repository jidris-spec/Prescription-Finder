/**
 * Demo Seed Script
 * Creates 4 demo accounts + sample data for recruiter demos.
 *
 * Run once:  node scripts/seed-demo.js
 *
 * Demo accounts (all passwords: demo1234)
 *   patient@medfind.demo   — Patient
 *   doctor@medfind.demo    — Doctor
 *   pharmacy@medfind.demo  — Pharmacist
 *   admin@medfind.demo     — Admin
 */

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from 'firebase/firestore'

// ── Firebase config ────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: 'AIzaSyA94XOgTSzfthS5Mfys6AuVL3JLfYzVREE',
  authDomain: 'medical-finder-web.firebaseapp.com',
  projectId: 'medical-finder-web',
  storageBucket: 'medical-finder-web.firebasestorage.app',
  messagingSenderId: '101675625825',
  appId: '1:101675625825:web:1a8d44aba9dd41fd84a920',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// ── Helpers ────────────────────────────────────────────────────────────────
const now = () => new Date().toISOString()
const daysFromNow = (n) => new Date(Date.now() + n * 86400000).toISOString()
const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString()

async function createOrSignIn(email, password) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    return cred.user.uid
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      return cred.user.uid
    }
    throw e
  }
}

// ── Seed ───────────────────────────────────────────────────────────────────
async function seed() {
  console.log('=== MedFind Demo Seed ===\n')

  // 1. Auth accounts + profiles
  console.log('Step 1 — Creating auth accounts & profiles...')

  const accounts = [
    { email: 'patient@medfind.demo',  password: 'demo1234', role: 'patient',    full_name: 'Alex Johnson' },
    { email: 'doctor@medfind.demo',   password: 'demo1234', role: 'doctor',     full_name: 'Dr. Sarah Chen' },
    { email: 'pharmacy@medfind.demo', password: 'demo1234', role: 'pharmacist', full_name: 'MedPlus Pharmacy' },
    { email: 'admin@medfind.demo',    password: 'demo1234', role: 'admin',      full_name: 'Admin User' },
  ]

  const uids = {}
  for (const acc of accounts) {
    const uid = await createOrSignIn(acc.email, acc.password)
    uids[acc.role] = uid
    await setDoc(doc(db, 'profiles', uid), {
      full_name: acc.full_name,
      role: acc.role,
      email: acc.email,
      created_at: now(),
      updated_at: now(),
    }, { merge: true })
    console.log(`  ✓ ${acc.role.padEnd(11)} ${acc.email}`)
  }

  // 2. Doctor record (verified)
  console.log('\nStep 2 — Creating doctor record...')
  const doctorRef = await addDoc(collection(db, 'doctors'), {
    user_id: uids.doctor,
    license_number: 'MD-2024-001',
    specialization: 'General Practice',
    hospital_affiliation: 'City Medical Center',
    verified: true,
    created_at: now(),
  })
  const doctorId = doctorRef.id
  console.log(`  ✓ Doctor doc: ${doctorId}`)

  // 3. Pharmacy record (verified)
  console.log('\nStep 3 — Creating pharmacy record...')
  const pharmacyRef = await addDoc(collection(db, 'pharmacies'), {
    user_id: uids.pharmacist,
    name: 'MedPlus Pharmacy',
    address: '123 Health Street, Medical District',
    registration_number: 'PH-2024-001',
    phone: '+1 (555) 234-5678',
    verified: true,
    created_at: now(),
  })
  const pharmacyId = pharmacyRef.id
  console.log(`  ✓ Pharmacy doc: ${pharmacyId}`)

  // 4. Approved doctor–patient connection
  console.log('\nStep 4 — Creating doctor–patient connection...')
  await addDoc(collection(db, 'connections'), {
    patient_id: uids.patient,
    doctor_id: doctorId,
    status: 'approved',
    created_at: daysAgo(10),
    updated_at: daysAgo(9),
  })
  console.log('  ✓ Connection approved')

  // 5. Medicines
  console.log('\nStep 5 — Seeding medicines...')
  const medicineData = [
    { name: 'Amoxicillin',   generic_name: 'Amoxicillin',   brand: 'Amoxil',      category: 'Antibiotic',              dosage_form: 'Capsule', strength: '500mg',   active_substance: 'Amoxicillin',   requires_prescription: true,  description: 'Broad-spectrum antibiotic for bacterial infections including respiratory and urinary tract infections.' },
    { name: 'Ibuprofen',     generic_name: 'Ibuprofen',     brand: 'Advil',       category: 'NSAID',                   dosage_form: 'Tablet',  strength: '400mg',   active_substance: 'Ibuprofen',     requires_prescription: false, description: 'Non-steroidal anti-inflammatory drug for pain, fever, and inflammation.' },
    { name: 'Metformin',     generic_name: 'Metformin',     brand: 'Glucophage',  category: 'Antidiabetic',            dosage_form: 'Tablet',  strength: '500mg',   active_substance: 'Metformin',     requires_prescription: true,  description: 'First-line oral medication for type 2 diabetes. Lowers blood glucose by reducing liver glucose production.' },
    { name: 'Lisinopril',    generic_name: 'Lisinopril',    brand: 'Zestril',     category: 'ACE Inhibitor',           dosage_form: 'Tablet',  strength: '10mg',    active_substance: 'Lisinopril',    requires_prescription: true,  description: 'ACE inhibitor used to treat high blood pressure, heart failure, and to protect kidneys in diabetic patients.' },
    { name: 'Atorvastatin',  generic_name: 'Atorvastatin',  brand: 'Lipitor',     category: 'Statin',                  dosage_form: 'Tablet',  strength: '20mg',    active_substance: 'Atorvastatin',  requires_prescription: true,  description: 'Statin medication that lowers LDL cholesterol and reduces the risk of cardiovascular events.' },
    { name: 'Omeprazole',    generic_name: 'Omeprazole',    brand: 'Prilosec',    category: 'Proton Pump Inhibitor',   dosage_form: 'Capsule', strength: '20mg',    active_substance: 'Omeprazole',    requires_prescription: false, description: 'Reduces stomach acid production. Used for GERD, peptic ulcers, and acid reflux.' },
    { name: 'Paracetamol',   generic_name: 'Acetaminophen', brand: 'Tylenol',     category: 'Analgesic',               dosage_form: 'Tablet',  strength: '500mg',   active_substance: 'Paracetamol',   requires_prescription: false, description: 'Common pain reliever and fever reducer. Safe for most patients when used as directed.' },
    { name: 'Cetirizine',    generic_name: 'Cetirizine',    brand: 'Zyrtec',      category: 'Antihistamine',           dosage_form: 'Tablet',  strength: '10mg',    active_substance: 'Cetirizine',    requires_prescription: false, description: 'Second-generation antihistamine for seasonal allergies, hay fever, and hives.' },
    { name: 'Azithromycin',  generic_name: 'Azithromycin',  brand: 'Zithromax',   category: 'Antibiotic',              dosage_form: 'Tablet',  strength: '250mg',   active_substance: 'Azithromycin',  requires_prescription: true,  description: 'Macrolide antibiotic used for respiratory infections, skin infections, and STIs.' },
    { name: 'Salbutamol',    generic_name: 'Albuterol',     brand: 'Ventolin',    category: 'Bronchodilator',          dosage_form: 'Inhaler', strength: '100mcg',  active_substance: 'Salbutamol',    requires_prescription: true,  description: 'Fast-acting bronchodilator for quick relief of asthma and COPD symptoms.' },
  ]

  const medIds = []
  for (const med of medicineData) {
    const ref = await addDoc(collection(db, 'medicines'), { ...med, created_at: now() })
    medIds.push(ref.id)
    console.log(`  ✓ ${med.name}`)
  }

  // 6. Prescriptions
  console.log('\nStep 6 — Creating prescriptions...')

  // Prescription 1 — Amoxicillin + Paracetamol (respiratory infection)
  const rx1Ref = await addDoc(collection(db, 'prescriptions'), {
    patient_id: uids.patient,
    doctor_id: doctorId,
    medicine_id: medIds[0],
    dosage: '1 capsule',
    frequency: 'Twice daily',
    duration: '7 days',
    diagnosis: 'Upper respiratory tract infection',
    notes: 'Take with food. Complete the full course even if feeling better.',
    status: 'active',
    expires_at: daysFromNow(30),
    created_at: daysAgo(2),
    updated_at: daysAgo(2),
  })
  await addDoc(collection(db, 'prescription_items'), {
    prescription_id: rx1Ref.id, medicine_id: medIds[0],
    dosage: '1 capsule', frequency: 'Twice daily', duration: '7 days', created_at: daysAgo(2),
  })
  await addDoc(collection(db, 'prescription_items'), {
    prescription_id: rx1Ref.id, medicine_id: medIds[6],
    dosage: '1 tablet', frequency: 'Three times daily', duration: '5 days', created_at: daysAgo(2),
  })
  console.log('  ✓ Rx 1 — Amoxicillin + Paracetamol (active)')

  // Prescription 2 — Metformin (diabetes)
  const rx2Ref = await addDoc(collection(db, 'prescriptions'), {
    patient_id: uids.patient,
    doctor_id: doctorId,
    medicine_id: medIds[2],
    dosage: '1 tablet',
    frequency: 'Once daily',
    duration: '30 days',
    diagnosis: 'Type 2 Diabetes — initial management',
    notes: 'Take with breakfast. Monitor blood sugar regularly.',
    status: 'active',
    expires_at: daysFromNow(90),
    created_at: daysAgo(5),
    updated_at: daysAgo(5),
  })
  await addDoc(collection(db, 'prescription_items'), {
    prescription_id: rx2Ref.id, medicine_id: medIds[2],
    dosage: '1 tablet', frequency: 'Once daily', duration: '30 days', created_at: daysAgo(5),
  })
  console.log('  ✓ Rx 2 — Metformin (active)')

  // Prescription 3 — Lisinopril (hypertension, completed)
  const rx3Ref = await addDoc(collection(db, 'prescriptions'), {
    patient_id: uids.patient,
    doctor_id: doctorId,
    medicine_id: medIds[3],
    dosage: '1 tablet',
    frequency: 'Once daily',
    duration: '14 days',
    diagnosis: 'Hypertension — monitoring phase',
    notes: 'Check blood pressure twice weekly.',
    status: 'completed',
    expires_at: daysAgo(1),
    created_at: daysAgo(20),
    updated_at: daysAgo(1),
  })
  await addDoc(collection(db, 'prescription_items'), {
    prescription_id: rx3Ref.id, medicine_id: medIds[3],
    dosage: '1 tablet', frequency: 'Once daily', duration: '14 days', created_at: daysAgo(20),
  })
  console.log('  ✓ Rx 3 — Lisinopril (completed)')

  // 7. Pharmacy inventory
  console.log('\nStep 7 — Seeding pharmacy inventory...')
  const inventoryItems = [
    { medicine_id: medIds[0], quantity: 250, price: 15.99 },  // Amoxicillin
    { medicine_id: medIds[1], quantity: 500, price: 8.49  },  // Ibuprofen
    { medicine_id: medIds[2], quantity: 180, price: 12.50 },  // Metformin
    { medicine_id: medIds[5], quantity: 300, price: 18.99 },  // Omeprazole
    { medicine_id: medIds[6], quantity: 600, price: 5.99  },  // Paracetamol
    { medicine_id: medIds[7], quantity: 150, price: 9.99  },  // Cetirizine
    { medicine_id: medIds[9], quantity: 80,  price: 32.50 },  // Salbutamol
  ]
  for (const item of inventoryItems) {
    await addDoc(collection(db, 'pharmacy_inventory'), {
      pharmacy_id: pharmacyId,
      ...item,
      created_at: now(),
      updated_at: now(),
    })
  }
  console.log(`  ✓ ${inventoryItems.length} inventory items added`)

  // ── Summary ──────────────────────────────────────────────────────────────
  console.log(`
╔══════════════════════════════════════════════════════╗
║               Demo Seed Complete ✅                  ║
╠══════════════════════════════════════════════════════╣
║  Role        Email                    Password       ║
║  ─────────── ─────────────────────── ─────────────  ║
║  Patient     patient@medfind.demo    demo1234        ║
║  Doctor      doctor@medfind.demo     demo1234        ║
║  Pharmacist  pharmacy@medfind.demo   demo1234        ║
║  Admin       admin@medfind.demo      demo1234        ║
╚══════════════════════════════════════════════════════╝

  Seeded: 10 medicines, 3 prescriptions, 7 inventory items
  `)

  process.exit(0)
}

seed().catch((e) => {
  console.error('\n❌ Seed failed:', e.message)
  process.exit(1)
})
