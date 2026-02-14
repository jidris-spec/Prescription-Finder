import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import {
  getPrescriptionsByPatient,
  getPrescriptionItems,
  getMedicine,
  getDoseLogsByPatient
} from '@/shared/lib/firebase/db'
import { DoseSchedule } from '../components/dose-schedule'
import { Loader2 } from 'lucide-react'

export default function SchedulePage() {
  const { user, profile } = useAuth()
  const [prescriptions, setPrescriptions] = useState([])
  const [doseLogs, setDoseLogs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user || profile?.role !== 'patient') {
      setLoading(false)
      return
    }

    try {
      const [prescriptionsData, logsData] = await Promise.all([
        getPrescriptionsByPatient(user.uid),
        getDoseLogsByPatient(user.uid, new Date())
      ])

      // Enrich prescriptions with medicine details
      const enriched = await Promise.all(
        prescriptionsData
          .filter(p => p.status === 'active')
          .map(async (prescription) => {
            const items = await getPrescriptionItems(prescription.id)
            let medicines = items.map(item => item.medicine).filter(Boolean)
            if (medicines.length === 0 && prescription.medicine_id) {
              const med = await getMedicine(prescription.medicine_id)
              if (med) medicines = [med]
            }
            return { ...prescription, medicines }
          })
      )

      setPrescriptions(enriched)
      setDoseLogs(logsData)
    } catch (error) {
      console.error('Error fetching schedule:', error)
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Schedule</h1>
        <p className="text-muted-foreground mt-1">
          Track your daily medication doses
        </p>
      </div>
      <DoseSchedule
        prescriptions={prescriptions}
        doseLogs={doseLogs}
        patientId={user.uid}
        onRefresh={fetchData}
      />
    </div>
  )
}
