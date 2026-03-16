import { useState, useEffect, useCallback, useRef } from 'react'
import {
  subscribeToPrescriptionsByPatient,
  subscribeToPrescriptionsByDoctor,
  getDoctorByUserId,
  getDoctor,
  getProfile,
  getPrescriptionItems,
  getMedicine
} from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { PrescriptionsList } from '@/components/common/prescriptions-list'
import { Skeleton } from '@/components/ui/skeleton'

function PrescriptionsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border border-border rounded-lg p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-lg" />
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          <div className="grid grid-cols-4 gap-4 pt-2">
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="space-y-1">
                <Skeleton className="h-3 w-14" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PrescriptionsPage() {
  const { user, profile } = useAuth()
  const [prescriptions, setPrescriptions] = useState([])
  const [loading, setLoading] = useState(true)
  const doctorIdRef = useRef(null)

  const enrichPrescriptions = useCallback(async (rawPrescriptions) => {
    if (!profile) return []

    if (profile.role === 'patient') {
      return Promise.all(
        rawPrescriptions.map(async (prescription) => {
          const [doctor, items] = await Promise.all([
            prescription.doctor_id ? getDoctor(prescription.doctor_id) : null,
            getPrescriptionItems(prescription.id)
          ])
          const doctorProfile = doctor?.user_id ? await getProfile(doctor.user_id) : null

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
    }

    if (profile.role === 'doctor') {
      return Promise.all(
        rawPrescriptions.map(async (prescription) => {
          const [patient, items] = await Promise.all([
            prescription.patient_id ? getProfile(prescription.patient_id) : null,
            getPrescriptionItems(prescription.id)
          ])

          let medicines = items.map(item => item.medicine).filter(Boolean)
          if (medicines.length === 0 && prescription.medicine_id) {
            const med = await getMedicine(prescription.medicine_id)
            if (med) medicines = [med]
          }

          return { ...prescription, medicines, patients: patient }
        })
      )
    }

    return rawPrescriptions
  }, [profile])

  useEffect(() => {
    if (!user || !profile) return

    let unsubscribe = null

    async function subscribe() {
      if (profile.role === 'patient') {
        unsubscribe = subscribeToPrescriptionsByPatient(user.uid, async (raw) => {
          const enriched = await enrichPrescriptions(raw)
          setPrescriptions(enriched)
          setLoading(false)
        })
      } else if (profile.role === 'doctor') {
        const doctor = await getDoctorByUserId(user.uid)
        if (!doctor) { setLoading(false); return }
        doctorIdRef.current = doctor.id
        unsubscribe = subscribeToPrescriptionsByDoctor(doctor.id, async (raw) => {
          const enriched = await enrichPrescriptions(raw)
          setPrescriptions(enriched)
          setLoading(false)
        })
      } else {
        setLoading(false)
      }
    }

    subscribe()
    return () => { if (unsubscribe) unsubscribe() }
  }, [user, profile, enrichPrescriptions])

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
      {loading ? (
        <PrescriptionsSkeleton />
      ) : (
        <PrescriptionsList
          prescriptions={prescriptions}
          role={profile?.role || 'patient'}
        />
      )}
    </div>
  )
}
