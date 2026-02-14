import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import {
  getDoctorByUserId,
  getPrescriptionsByDoctor,
  getProfile,
  getAllProfiles
} from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { PatientsList } from '../components/patients-list'
import { Loader2 } from 'lucide-react'

export default function PatientsPage() {
  const { user, profile } = useAuth()
  const [myPatients, setMyPatients] = useState([])
  const [allPatients, setAllPatients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!user || profile?.role !== 'doctor') {
        setLoading(false)
        return
      }

      try {
        // Get doctor record by user id (using uid for Firebase)
        const doctor = await getDoctorByUserId(user.uid)

        let patients = []

        if (doctor) {
          // Get all prescriptions by this doctor
          const prescriptions = await getPrescriptionsByDoctor(doctor.id)

          // Extract unique patient IDs and fetch their profiles
          const patientMap = new Map()

          await Promise.all(
            prescriptions.map(async (p) => {
              if (p.patient_id && !patientMap.has(p.patient_id)) {
                const patientProfile = await getProfile(p.patient_id)
                if (patientProfile) {
                  patientMap.set(p.patient_id, {
                    id: patientProfile.id,
                    full_name: patientProfile.full_name,
                    email: patientProfile.email,
                    phone: patientProfile.phone
                  })
                }
              }
            })
          )

          patients = Array.from(patientMap.values())
        }

        // Get all patient profiles
        const allProfiles = await getAllProfiles()
        const allPatientsData = allProfiles
          .filter(p => p.role === 'patient')
          .map(p => ({
            id: p.id,
            full_name: p.full_name,
            email: p.email,
            phone: p.phone
          }))
          .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || ''))

        setMyPatients(patients)
        setAllPatients(allPatientsData)
      } catch (error) {
        console.error('Error fetching patients:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user, profile])

  if (!loading && profile?.role !== 'doctor') {
    return <Navigate to="/dashboard" replace />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patients</h1>
        <p className="text-muted-foreground mt-1">
          View and manage your patients
        </p>
      </div>
      <PatientsList myPatients={myPatients} allPatients={allPatients} />
    </div>
  )
}
