import { useState, useEffect } from 'react'
import {
  getPrescriptionsByPatient,
  getPrescriptionsByDoctor,
  getDoctorByUserId,
  getDoctor,
  getProfile,
  getPrescriptionItems
} from '@/lib/firebase/db'
import { useAuth } from '@/src/contexts/AuthContext'
import { PrescriptionsList } from '@/components/dashboard/prescriptions-list'
import { Loader2 } from 'lucide-react'

export default function PrescriptionsPage() {
  const { user, profile } = useAuth()
  const [prescriptions, setPrescriptions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrescriptions = async () => {
      if (!user || !profile) return

      try {
        let data = []

        if (profile.role === 'patient') {
          // Fetch prescriptions for patient using Firebase uid
          const prescriptionsData = await getPrescriptionsByPatient(user.uid)

          // Enrich prescriptions with doctor and medicine details
          data = await Promise.all(
            prescriptionsData.map(async (prescription) => {
              const doctor = prescription.doctor_id ? await getDoctor(prescription.doctor_id) : null
              const doctorProfile = doctor?.user_id ? await getProfile(doctor.user_id) : null
              const items = await getPrescriptionItems(prescription.id)

              return {
                ...prescription,
                medicines: items.map(item => item.medicine).filter(Boolean),
                doctors: doctor ? { ...doctor, profiles: doctorProfile } : null
              }
            })
          )
        } else if (profile.role === 'doctor') {
          // Get doctor record by user id
          const doctor = await getDoctorByUserId(user.uid)

          if (doctor) {
            const prescriptionsData = await getPrescriptionsByDoctor(doctor.id)

            // Enrich prescriptions with patient and medicine details
            data = await Promise.all(
              prescriptionsData.map(async (prescription) => {
                const patient = prescription.patient_id ? await getProfile(prescription.patient_id) : null
                const items = await getPrescriptionItems(prescription.id)

                return {
                  ...prescription,
                  medicines: items.map(item => item.medicine).filter(Boolean),
                  patients: patient
                }
              })
            )
          }
        }

        setPrescriptions(data)
      } catch (error) {
        console.error('Error fetching prescriptions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrescriptions()
  }, [user, profile])

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
        <h1 className="text-3xl font-bold text-foreground">
          {profile?.role === 'doctor' ? 'Prescriptions Written' : 'My Prescriptions'}
        </h1>
        <p className="text-muted-foreground mt-1">
          {profile?.role === 'doctor'
            ? 'View and manage prescriptions you have written'
            : 'View prescriptions from your doctors'
          }
        </p>
      </div>
      <PrescriptionsList
        prescriptions={prescriptions}
        role={profile?.role || 'patient'}
      />
    </div>
  )
}
