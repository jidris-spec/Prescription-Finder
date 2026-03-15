import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the Firebase client so no real connection is needed
vi.mock('@/shared/lib/firebase/client', () => ({
  db: {},
}))

// Mock firebase/firestore primitives
const mockDocs = []
const mockSnapshot = { docs: mockDocs, empty: mockDocs.length === 0 }

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(() => 'mock-collection'),
  doc: vi.fn((db, col, id) => ({ id })),
  getDoc: vi.fn(async (ref) => ({
    exists: () => true,
    id: ref.id,
    data: () => ({ patient_id: 'p1', doctor_id: 'd1', status: 'active', created_at: new Date().toISOString() }),
  })),
  getDocs: vi.fn(async () => mockSnapshot),
  addDoc: vi.fn(async () => ({ id: 'new-prescription-id' })),
  updateDoc: vi.fn(async () => {}),
  query: vi.fn((...args) => args),
  where: vi.fn((...args) => args),
  orderBy: vi.fn((...args) => args),
  onSnapshot: vi.fn(() => vi.fn()), // returns unsubscribe fn
}))

// Also mock getMedicine used inside getPrescriptionItems
vi.mock('@/shared/lib/firebase/db/medicines', () => ({
  getMedicine: vi.fn(async (id) => ({ id, name: 'Amoxicillin', strength: '500mg' })),
}))

import {
  createPrescription,
  getPrescription,
  updatePrescription,
  subscribeToPrescriptionsByPatient,
  subscribeToPrescriptionsByDoctor,
} from '@/shared/lib/firebase/db/prescriptions'
import { onSnapshot } from 'firebase/firestore'

describe('createPrescription', () => {
  it('returns the new document id', async () => {
    const id = await createPrescription({ patient_id: 'p1', doctor_id: 'd1', dosage: '1 tablet' })
    expect(id).toBe('new-prescription-id')
  })
})

describe('getPrescription', () => {
  it('returns a prescription with id merged in', async () => {
    const result = await getPrescription('rx-123')
    expect(result).toMatchObject({ id: 'rx-123', status: 'active' })
  })
})

describe('updatePrescription', () => {
  it('calls updateDoc without throwing', async () => {
    await expect(updatePrescription('rx-123', { status: 'cancelled' })).resolves.toBeUndefined()
  })
})

describe('subscribeToPrescriptionsByPatient', () => {
  it('calls onSnapshot and returns an unsubscribe function', () => {
    const callback = vi.fn()
    const unsubscribe = subscribeToPrescriptionsByPatient('patient-1', callback)
    expect(onSnapshot).toHaveBeenCalled()
    expect(typeof unsubscribe).toBe('function')
  })
})

describe('subscribeToPrescriptionsByDoctor', () => {
  it('calls onSnapshot and returns an unsubscribe function', () => {
    const callback = vi.fn()
    const unsubscribe = subscribeToPrescriptionsByDoctor('doctor-1', callback)
    expect(onSnapshot).toHaveBeenCalled()
    expect(typeof unsubscribe).toBe('function')
  })
})
