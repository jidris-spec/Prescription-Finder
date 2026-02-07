import { useState, useEffect } from 'react'
import { useAuth } from '@/src/contexts/AuthContext'
import { getDoctorByUserId, getPharmacyByUserId } from '@/lib/firebase/db'
import { SettingsForm } from '@/components/dashboard/settings-form'
import { Loader2 } from 'lucide-react'

export default function SettingsPage() {
  const { user, profile } = useAuth()
  const [doctorInfo, setDoctorInfo] = useState(null)
  const [pharmacyInfo, setPharmacyInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    if (!user || !profile) {
      setLoading(false)
      return
    }

    try {
      if (profile.role === 'doctor') {
        const data = await getDoctorByUserId(user.uid)
        setDoctorInfo(data)
      }

      if (profile.role === 'pharmacist') {
        const data = await getPharmacyByUserId(user.uid)
        setPharmacyInfo(data)
      }
    } catch (error) {
      console.error('Error fetching settings data:', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [user, profile])

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
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and profile settings
        </p>
      </div>
      <SettingsForm
        profile={profile}
        doctorInfo={doctorInfo}
        pharmacyInfo={pharmacyInfo}
        onRefresh={fetchData}
      />
    </div>
  )
}
