import { Outlet } from 'react-router-dom'
import { useAuth } from '@/src/contexts/AuthContext'
import { DashboardNav } from '@/components/dashboard/dashboard-nav'

export default function DashboardLayout() {
  const { user, profile } = useAuth()

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav user={user} profile={profile} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
