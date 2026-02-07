import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllMedicines, getDoctorByUserId, getConnectionsByDoctor, getProfile } from '@/lib/firebase/db'
import { useAuth } from '@/src/contexts/AuthContext'
import { NewPrescriptionForm } from '@/components/dashboard/new-prescription-form'
import { Loader2 } from 'lucide-react'

export default function NewPrescriptionPage() {
  const { user, profile } = useAuth()
  const [doctor, setDoctor] = useState(null)
  const [medicines, setMedicines] = useState([])
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user || profile?.role !== 'doctor') {
      setLoading(false)
      return
    }

    try {
      const [doctorData, medicinesData] = await Promise.all([
        getDoctorByUserId(user.uid),
        getAllMedicines()
      ])

      setDoctor(doctorData)
      setMedicines(medicinesData || [])

      // Get connected patients for this doctor
      if (doctorData) {
        const connections = await getConnectionsByDoctor(doctorData.id)
        const patientProfiles = await Promise.all(
          connections
            .filter(conn => conn.status === 'accepted')
            .map(conn => getProfile(conn.patient_id))
        )
        setPatients(patientProfiles.filter(Boolean))
      }
    } catch (error) {
      console.error('Error fetching prescription data:', error)
      setMedicines([])
      setPatients([])
    } finally {
      setLoading(false)
    }
  }, [user, profile])

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
        <h1 className="text-3xl font-bold text-foreground">New Prescription</h1>
        <p className="text-muted-foreground mt-1">
          Write a prescription for your patient
        </p>
      </div>
      <NewPrescriptionForm
        doctor={doctor}
        medicines={medicines}
        patients={patients}
        onRefresh={fetchData}
      />
    </div>
  )
}
