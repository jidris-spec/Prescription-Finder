import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllDoctors, getProfile } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { DoctorsManager } from '../components/doctors-manager'
import { Loader2 } from 'lucide-react'

export default function DoctorsPage() {
  const { profile } = useAuth()
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (profile?.role !== 'admin') {
      setLoading(false)
      return
    }

    try {
      const data = await getAllDoctors()
      const doctorsWithProfiles = await Promise.all(
        (data || []).map(async (doctor) => {
          const profile = await getProfile(doctor.user_id)
          return { ...doctor, profiles: profile || {} }
        })
      )
      setDoctors(doctorsWithProfiles)
    } catch (error) {
      console.error('Error fetching doctors:', error)
      setDoctors([])
    } finally {
      setLoading(false)
    }
  }, [profile])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!loading && profile?.role !== 'admin') {
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
        <h1 className="text-3xl font-bold text-foreground">Doctor Management</h1>
        <p className="text-muted-foreground mt-1">
          Verify and manage registered doctors
        </p>
      </div>
      <DoctorsManager doctors={doctors} onRefresh={fetchData} />
    </div>
  )
}
