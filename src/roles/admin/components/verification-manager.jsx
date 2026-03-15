import { useState } from 'react'
import { toast } from 'sonner'
import { updateDoctor, updatePharmacy } from '@/shared/lib/firebase/db'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, XCircle, Stethoscope, Building2, Clock, User } from 'lucide-react'

function VerificationCard({ item, type, onRefresh }) {
  const [loading, setLoading] = useState(null)

  const handleVerify = async (approved) => {
    setLoading(approved ? 'approve' : 'reject')
    try {
      if (type === 'doctor') {
        await updateDoctor(item.id, { verified: approved })
      } else {
        await updatePharmacy(item.id, { verified: approved })
      }
      toast.success(`${type === 'doctor' ? 'Doctor' : 'Pharmacy'} ${approved ? 'approved' : 'rejected'}`)
      if (onRefresh) onRefresh()
    } catch (err) {
      console.error('Error updating verification:', err)
      toast.error('Failed to update verification status')
    }
    setLoading(null)
  }

  const isDoctor = type === 'doctor'

  return (
    <Card className="border-border">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${item.verified ? 'bg-green-100 dark:bg-green-900/30' : 'bg-orange-100 dark:bg-orange-900/30'}`}>
              {isDoctor
                ? <Stethoscope className={`h-5 w-5 ${item.verified ? 'text-green-600' : 'text-orange-600'}`} />
                : <Building2 className={`h-5 w-5 ${item.verified ? 'text-green-600' : 'text-orange-600'}`} />
              }
            </div>
            <div>
              <CardTitle className="text-base">
                {isDoctor
                  ? (item.profile?.full_name ? `Dr. ${item.profile.full_name}` : 'Unknown Doctor')
                  : (item.name || 'Unknown Pharmacy')
                }
              </CardTitle>
              <CardDescription>
                {isDoctor ? item.specialization || 'General Medicine' : item.address || 'No address'}
              </CardDescription>
            </div>
          </div>
          <Badge className={item.verified
            ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
            : 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
          }>
            {item.verified ? 'Verified' : 'Pending'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
          {isDoctor ? (
            <>
              <p className="flex items-center gap-2">
                <User className="h-4 w-4" />
                License: {item.license_number || 'N/A'}
              </p>
              {item.hospital_affiliation && (
                <p className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  {item.hospital_affiliation}
                </p>
              )}
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Registered: {new Date(item.created_at).toLocaleDateString()}
              </p>
            </>
          ) : (
            <>
              <p className="flex items-center gap-2">
                <User className="h-4 w-4" />
                License: {item.license_number || 'N/A'}
              </p>
              {item.phone && (
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {item.phone}
                </p>
              )}
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Registered: {new Date(item.created_at).toLocaleDateString()}
              </p>
            </>
          )}
        </div>

        {!item.verified && (
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => handleVerify(true)}
              disabled={!!loading}
              className="flex-1"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              {loading === 'approve' ? 'Approving…' : 'Approve'}
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleVerify(false)}
              disabled={!!loading}
              className="flex-1"
            >
              <XCircle className="mr-2 h-4 w-4" />
              {loading === 'reject' ? 'Rejecting…' : 'Reject'}
            </Button>
          </div>
        )}

        {item.verified && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleVerify(false)}
            disabled={!!loading}
            className="text-destructive hover:text-destructive"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Revoke Verification
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function VerificationManager({ doctors, pharmacies, onRefresh }) {
  const pendingDoctors = doctors.filter(d => !d.verified)
  const verifiedDoctors = doctors.filter(d => d.verified)
  const pendingPharmacies = pharmacies.filter(p => !p.verified)
  const verifiedPharmacies = pharmacies.filter(p => p.verified)

  return (
    <Tabs defaultValue="pending" className="space-y-6">
      <TabsList>
        <TabsTrigger value="pending">
          Pending ({pendingDoctors.length + pendingPharmacies.length})
        </TabsTrigger>
        <TabsTrigger value="verified">
          Verified ({verifiedDoctors.length + verifiedPharmacies.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pending" className="space-y-6">
        {pendingDoctors.length === 0 && pendingPharmacies.length === 0 ? (
          <Card className="border-dashed border-border">
            <CardContent className="py-16 text-center">
              <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No pending verifications</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {pendingDoctors.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Doctors ({pendingDoctors.length})
                </h3>
                {pendingDoctors.map(doctor => (
                  <VerificationCard key={doctor.id} item={doctor} type="doctor" onRefresh={onRefresh} />
                ))}
              </div>
            )}
            {pendingPharmacies.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Pharmacies ({pendingPharmacies.length})
                </h3>
                {pendingPharmacies.map(pharmacy => (
                  <VerificationCard key={pharmacy.id} item={pharmacy} type="pharmacy" onRefresh={onRefresh} />
                ))}
              </div>
            )}
          </>
        )}
      </TabsContent>

      <TabsContent value="verified" className="space-y-6">
        {verifiedDoctors.length === 0 && verifiedPharmacies.length === 0 ? (
          <Card className="border-dashed border-border">
            <CardContent className="py-16 text-center">
              <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No verified entries yet</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {verifiedDoctors.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Doctors ({verifiedDoctors.length})
                </h3>
                {verifiedDoctors.map(doctor => (
                  <VerificationCard key={doctor.id} item={doctor} type="doctor" onRefresh={onRefresh} />
                ))}
              </div>
            )}
            {verifiedPharmacies.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Pharmacies ({verifiedPharmacies.length})
                </h3>
                {verifiedPharmacies.map(pharmacy => (
                  <VerificationCard key={pharmacy.id} item={pharmacy} type="pharmacy" onRefresh={onRefresh} />
                ))}
              </div>
            )}
          </>
        )}
      </TabsContent>
    </Tabs>
  )
}
