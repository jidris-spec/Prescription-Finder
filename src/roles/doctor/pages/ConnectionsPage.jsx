import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import {
  getDoctorByUserId,
  getConnectionsByDoctor,
  updateConnection,
  getProfile
} from '@/shared/lib/firebase/db'
import { DoctorConnections } from '../components/doctor-connections'
import { Loader2 } from 'lucide-react'

export default function ConnectionsPage() {
  const { user, profile } = useAuth()
  const [doctor, setDoctor] = useState(null)
  const [connections, setConnections] = useState([])
  const [patientProfiles, setPatientProfiles] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user || profile?.role !== 'doctor') {
      setLoading(false)
      return
    }

    try {
      const doctorData = await getDoctorByUserId(user.uid)
      setDoctor(doctorData)

      if (doctorData) {
        const conns = await getConnectionsByDoctor(doctorData.id)

        // Fetch patient profiles
        const profiles = {}
        await Promise.all(
          conns.map(async (conn) => {
            const p = await getProfile(conn.patient_id)
            if (p) profiles[conn.patient_id] = p
          })
        )

        setConnections(conns)
        setPatientProfiles(profiles)
      }
    } catch (error) {
      console.error('Error fetching connections:', error)
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

  const handleAccept = async (connectionId) => {
    await updateConnection(connectionId, { status: 'approved' })
    await fetchData()
  }

  const handleReject = async (connectionId) => {
    await updateConnection(connectionId, { status: 'rejected' })
    await fetchData()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patient Connections</h1>
        <p className="text-muted-foreground mt-1">
          Manage connection requests from patients
        </p>
      </div>
      <DoctorConnections
        connections={connections}
        patientProfiles={patientProfiles}
        onAccept={handleAccept}
        onReject={handleReject}
        onRefresh={fetchData}
      />
    </div>
  )
}
