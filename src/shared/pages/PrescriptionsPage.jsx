import { useState, useEffect, useCallback } from 'react'
import {
  getPrescriptionsByPatient,
  getPrescriptionsByDoctor,
  getDoctorByUserId,
  getDoctor,
  getProfile,
  getPrescriptionItems,
  getMedicine
} from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { PrescriptionsList } from '@/components/common/prescriptions-list'
import { Loader2 } from 'lucide-react'

export default function PrescriptionsPage() {
  const { user, profile } = useAuth()
  const [prescriptions, setPrescriptions] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPrescriptions = useCallback(async () => {
    if (!user || !profile) return

    try {
      let data = []

      if (profile.role === 'patient') {
        const prescriptionsData = await getPrescriptionsByPatient(user.uid)

        data = await Promise.all(
          prescriptionsData.map(async (prescription) => {
            const doctor = prescription.doctor_id ? await getDoctor(prescription.doctor_id) : null
            const doctorProfile = doctor?.user_id ? await getProfile(doctor.user_id) : null
            const items = await getPrescriptionItems(prescription.id)

            // If no items, fall back to the medicine_id on the prescription itself
            let medicines = items.map(item => item.medicine).filter(Boolean)
            if (medicines.length === 0 && prescription.medicine_id) {
              const med = await getMedicine(prescription.medicine_id)
              if (med) medicines = [med]
            }

            return {
              ...prescription,
              medicines,
              doctors: doctor ? { ...doctor, profiles: doctorProfile } : null
            }
          })
        )
      } else if (profile.role === 'doctor') {
        const doctor = await getDoctorByUserId(user.uid)

        if (doctor) {
          const prescriptionsData = await getPrescriptionsByDoctor(doctor.id)

          data = await Promise.all(
            prescriptionsData.map(async (prescription) => {
              const patient = prescription.patient_id ? await getProfile(prescription.patient_id) : null
              const items = await getPrescriptionItems(prescription.id)

              let medicines = items.map(item => item.medicine).filter(Boolean)
              if (medicines.length === 0 && prescription.medicine_id) {
                const med = await getMedicine(prescription.medicine_id)
                if (med) medicines = [med]
              }

              return {
                ...prescription,
                medicines,
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
  }, [user, profile])

  useEffect(() => {
    fetchPrescriptions()
  }, [fetchPrescriptions])

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
        onRefresh={fetchPrescriptions}
      />
    </div>
  )
}
