import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllProfiles } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { UsersManager } from '../components/users-manager'
import { Loader2 } from 'lucide-react'

export default function UsersPage() {
  const { profile } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (profile?.role !== 'admin') {
      setLoading(false)
      return
    }

    try {
      const data = await getAllProfiles()
      setUsers(data || [])
    } catch (error) {
      console.error('Error fetching users:', error)
      setUsers([])
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
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground mt-1">
          View and manage all registered users
        </p>
      </div>
      <UsersManager users={users} onRefresh={fetchData} />
    </div>
  )
}
