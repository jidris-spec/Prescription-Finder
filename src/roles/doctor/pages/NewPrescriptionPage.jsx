import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllMedicines, getDoctorByUserId, getConnectedPatients, getProfile } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { NewPrescriptionForm } from '../components/new-prescription-form'
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
      const doctorData = await getDoctorByUserId(user.uid)
      setDoctor(doctorData)

      const [medicinesData, connectedPatients] = await Promise.all([
        getAllMedicines(),
        doctorData ? getConnectedPatients(doctorData.id) : []
      ])

      // Resolve patient profiles from connection records
      const patientList = await Promise.all(
        (connectedPatients || []).map(async (conn) => {
          const p = await getProfile(conn.patient_id)
          return p ? { id: conn.patient_id, ...p } : null
        })
      )

      setMedicines(medicinesData || [])
      setPatients(patientList.filter(Boolean))
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
