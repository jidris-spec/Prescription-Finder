import { useAuth } from '@/context/AuthContext'
import { normalizeRole } from '@/shared/lib/utils/roles'
import { MyRequests } from '@/roles/patient/components/my-requests'
import { IncomingRequests } from '@/roles/pharmacy/components/incoming-requests'

export default function RequestsPage() {
  const { profile } = useAuth()
  const role = normalizeRole(profile?.role)

  if (role === 'patient') return <MyRequests />
  if (role === 'pharmacist') return <IncomingRequests />
  return null
}
