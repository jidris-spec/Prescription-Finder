import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllMedicines } from '@/lib/firebase/db'
import { useAuth } from '@/src/contexts/AuthContext'
import { MedicinesManager } from '@/components/dashboard/medicines-manager'
import { Loader2 } from 'lucide-react'

export default function MedicinesPage() {
  const { profile } = useAuth()
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (profile?.role !== 'admin') {
        setLoading(false)
        return
      }

      try {
        const data = await getAllMedicines()
        setMedicines(data || [])
      } catch (error) {
        console.error('Error fetching medicines:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [profile])

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
        <h1 className="text-3xl font-bold text-foreground">Medicine Database</h1>
        <p className="text-muted-foreground mt-1">
          Manage the medicine catalog
        </p>
      </div>
      <MedicinesManager medicines={medicines} />
    </div>
  )
}
