/**
 * Firestore document types for MedFind.
 * Import these wherever you need type-safe access to database records.
 */

export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  address: string | null
  role: 'patient' | 'doctor' | 'pharmacist' | 'admin'
  created_at: string
  updated_at?: string
}

export interface Doctor {
  id: string
  user_id: string
  license_number: string
  specialization: string | null
  hospital_affiliation: string | null
  verified: boolean
  created_at: string
  /** Joined from profiles — not stored in Firestore */
  profile?: UserProfile | null
}

export interface Pharmacy {
  id: string
  user_id: string
  name: string
  license_number: string
  address: string
  phone: string
  email: string | null
  operating_hours: string | null
  verified: boolean
  created_at: string
  updated_at?: string
}

export interface Medicine {
  id: string
  name: string
  brand_name: string | null
  generic_name: string | null
  active_substance: string | null
  strength: string | null
  category: string | null
  description: string | null
  created_at: string
}

export type PrescriptionStatus = 'active' | 'completed' | 'cancelled'

export interface Prescription {
  id: string
  patient_id: string
  doctor_id: string
  medicine_id?: string | null
  dosage: string
  frequency: string
  duration: string | null
  diagnosis: string | null
  notes: string | null
  status: PrescriptionStatus
  expires_at: string | null
  created_at: string
  updated_at: string
  /** Joined — not stored in Firestore */
  medicines?: Medicine[]
  /** Joined — not stored in Firestore */
  doctors?: Doctor & { profiles?: UserProfile | null }
  /** Joined — not stored in Firestore */
  patients?: UserProfile | null
}

export interface PrescriptionItem {
  id: string
  prescription_id: string
  medicine_id: string
  dosage: string
  frequency: string
  duration: string | null
  notes: string | null
  created_at: string
  /** Joined — not stored in Firestore */
  medicine?: Medicine | null
}

export type FulfillmentStatus = 'ready' | 'partially_available' | 'not_available' | 'filled_generic'

export interface Order {
  id: string
  prescription_id: string
  pharmacy_id: string
  quantity: number
  fulfillment_status: FulfillmentStatus
  fulfillment_notes: string | null
  filled_at: string
  created_at?: string
  /** Joined — not stored in Firestore */
  prescriptions?: Prescription
}

export interface PharmacyInventoryItem {
  id: string
  pharmacy_id: string
  medicine_id: string
  quantity: number
  price: number | null
  unit: string | null
  created_at: string
  updated_at?: string
  /** Joined — not stored in Firestore */
  medicine?: Medicine | null
}

export type ConnectionStatus = 'pending' | 'approved' | 'rejected'

export interface Connection {
  id: string
  patient_id: string
  doctor_id: string
  status: ConnectionStatus
  created_at: string
  updated_at?: string
}

export interface DoseLog {
  id: string
  patient_id: string
  prescription_id: string
  date: string
  time_slot: string
  taken: boolean
  taken_at: string | null
  created_at: string
}
