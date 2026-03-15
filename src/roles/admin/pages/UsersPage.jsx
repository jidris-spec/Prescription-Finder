import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllProfiles } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { UsersManager } from '../components/users-manager'
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'

function UsersTableSkeleton() {
  return (
    <Card className="border-border">
      <div className="p-4 space-y-3">
        <div className="flex gap-4 pb-2">
          <Skeleton className="h-9 flex-1" />
          <Skeleton className="h-9 w-40" />
        </div>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="flex items-center gap-4 py-2 border-t border-border">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-36" />
            </div>
            <Skeleton className="h-4 w-44" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-28 ml-auto" />
          </div>
        ))}
      </div>
    </Card>
  )
}

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground mt-1">
          View and manage all registered users
        </p>
      </div>
      {loading ? <UsersTableSkeleton /> : <UsersManager users={users} onRefresh={fetchData} />}
    </div>
  )
}
