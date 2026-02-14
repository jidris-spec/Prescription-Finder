import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import {
  getVerifiedDoctors,
  getConnectionsByPatient,
  createConnection,
  getProfile
} from '@/shared/lib/firebase/db'
import { PatientDoctors } from '../components/patient-doctors'
import { Loader2 } from 'lucide-react'

export default function MyDoctorsPage() {
  const { user, profile } = useAuth()
  const [doctors, setDoctors] = useState([])
  const [connections, setConnections] = useState([])
  const [doctorProfiles, setDoctorProfiles] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user || profile?.role !== 'patient') {
      setLoading(false)
      return
    }

    try {
      const [verifiedDocs, patientConns] = await Promise.all([
        getVerifiedDoctors(),
        getConnectionsByPatient(user.uid)
      ])

      // Fetch profiles for all doctors
      const profiles = {}
      await Promise.all(
        verifiedDocs.map(async (doc) => {
          const p = await getProfile(doc.user_id)
          if (p) profiles[doc.user_id] = p
        })
      )

      setDoctors(verifiedDocs)
      setConnections(patientConns)
      setDoctorProfiles(profiles)
    } catch (error) {
      console.error('Error fetching doctors:', error)
    } finally {
      setLoading(false)
    }
  }, [user, profile])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!loading && profile?.role !== 'patient') {
    return <Navigate to="/dashboard" replace />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  const handleSendRequest = async (doctorId) => {
    await createConnection({
      patient_id: user.uid,
      doctor_id: doctorId
    })
    await fetchData()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Doctors</h1>
        <p className="text-muted-foreground mt-1">
          Connect with doctors to receive prescriptions
        </p>
      </div>
      <PatientDoctors
        verifiedDoctors={doctors}
        connections={connections}
        doctorProfiles={doctorProfiles}
        onSendRequest={handleSendRequest}
        onRefresh={fetchData}
      />
    </div>
  )
}
