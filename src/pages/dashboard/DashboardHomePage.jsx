import { useAuth } from '@/src/contexts/AuthContext'
import { PatientDashboard } from '@/components/dashboard/patient-dashboard'
import { DoctorDashboard } from '@/components/dashboard/doctor-dashboard'
import { PharmacistDashboard } from '@/components/dashboard/pharmacist-dashboard'
import { AdminDashboard } from '@/components/dashboard/admin-dashboard'

export default function DashboardHomePage() {
  const { profile } = useAuth()
  const role = profile?.role || 'patient'

  switch (role) {
    case 'doctor':
      return <DoctorDashboard profile={profile} />
    case 'pharmacist':
      return <PharmacistDashboard profile={profile} />
    case 'admin':
      return <AdminDashboard profile={profile} />
    default:
      return <PatientDashboard profile={profile} />
  }
}
