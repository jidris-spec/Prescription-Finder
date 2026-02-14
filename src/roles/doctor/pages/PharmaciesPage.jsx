import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllPharmacies } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { PharmaciesManager } from '../components/pharmacies-manager'
import { Loader2 } from 'lucide-react'

export default function PharmaciesPage() {
  const { profile } = useAuth()
  const [pharmacies, setPharmacies] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (profile?.role !== 'admin') {
      setLoading(false)
      return
    }

    try {
      const data = await getAllPharmacies()
      setPharmacies(data || [])
    } catch (error) {
      console.error('Error fetching pharmacies:', error)
      setPharmacies([])
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
        <h1 className="text-3xl font-bold text-foreground">Pharmacy Management</h1>
        <p className="text-muted-foreground mt-1">
          Verify and manage registered pharmacies
        </p>
      </div>
      <PharmaciesManager pharmacies={pharmacies} onRefresh={fetchData} />
    </div>
  )
}
