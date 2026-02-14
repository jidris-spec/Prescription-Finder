export {
  getDoctorByUserId,
  getDoctor,
  getAllDoctors,
  getVerifiedDoctors,
  updateDoctor,
} from '@/shared/lib/firebase/db/doctors'

export {
  getPrescriptionsByDoctor,
  createPrescription,
  addPrescriptionItem,
  getPrescriptionItems,
} from '@/shared/lib/firebase/db/prescriptions'

export {
  getConnectionsByDoctor,
  getConnectedPatients,
  updateConnection,
} from '@/shared/lib/firebase/db/connections'

export {
  getProfile,
  getAllProfiles,
} from '@/shared/lib/firebase/db/profiles'

export {
  getAllMedicines,
} from '@/shared/lib/firebase/db/medicines'
