import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllDoctors, getAllPharmacies, getProfile } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { VerificationManager } from '../components/verification-manager'
import { Skeleton } from '@/components/ui/skeleton'

function VerificationsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
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
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-8 flex-1 rounded-md" />
            <Skeleton className="h-8 flex-1 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function VerificationsPage() {
  const { profile } = useAuth()
  const [doctors, setDoctors] = useState([])
  const [pharmacies, setPharmacies] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (profile?.role !== 'admin') { setLoading(false); return }

    try {
      const [rawDoctors, rawPharmacies] = await Promise.all([
        getAllDoctors(),
        getAllPharmacies(),
      ])

      // Enrich doctors with their profile (name)
      const enrichedDoctors = await Promise.all(
        rawDoctors.map(async (doctor) => {
          const p = doctor.user_id ? await getProfile(doctor.user_id) : null
          return { ...doctor, profile: p }
        })
      )

      setDoctors(enrichedDoctors)
      setPharmacies(rawPharmacies)
    } catch (error) {
      console.error('Error fetching verification data:', error)
    } finally {
      setLoading(false)
    }
  }, [profile])

  useEffect(() => { fetchData() }, [fetchData])

  if (!loading && profile?.role !== 'admin') return <Navigate to="/dashboard" replace />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Verifications</h1>
        <p className="text-muted-foreground mt-1">
          Approve or reject doctor and pharmacy registration requests
        </p>
      </div>
      {loading ? (
        <VerificationsSkeleton />
      ) : (
        <VerificationManager
          doctors={doctors}
          pharmacies={pharmacies}
          onRefresh={fetchData}
        />
      )}
    </div>
  )
}
