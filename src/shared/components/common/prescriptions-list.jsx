import { useState } from 'react'
import { toast } from 'sonner'
import { updatePrescription } from '@/shared/lib/firebase/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Pill, Calendar, Clock, User, Stethoscope, XCircle, Loader2, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react'

const PAGE_SIZE = 5

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  completed: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

function getDaysUntilExpiry(expiresAt) {
  if (!expiresAt) return null
  const now = new Date()
  const expiry = new Date(expiresAt)
  const diff = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24))
  return diff
}

function RefillBadge({ daysLeft }) {
  if (daysLeft === null || daysLeft < 0) return null
  if (daysLeft <= 7) {
    return (
      <Badge className="bg-red-100 text-red-800 text-xs">
        <AlertTriangle className="h-3 w-3 mr-1" />
        Refill in {daysLeft} days
      </Badge>
    )
  }
  if (daysLeft <= 14) {
    return (
      <Badge className="bg-orange-100 text-orange-800 text-xs">
        Refill in {daysLeft} days
      </Badge>
    )
  }
  return null
}

export function PrescriptionsList({ prescriptions, role, onRefresh }) {
  const [cancelling, setCancelling] = useState(null)
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(prescriptions.length / PAGE_SIZE))
  const paged = prescriptions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleCancel = async (prescriptionId) => {
    setCancelling(prescriptionId)
    try {
      await updatePrescription(prescriptionId, { status: 'cancelled' })
      toast.success('Prescription cancelled')
      if (onRefresh) onRefresh()
    } catch (err) {
      console.error('Error cancelling prescription:', err)
      toast.error('Failed to cancel prescription')
    }
    setCancelling(null)
  }

  if (prescriptions.length === 0) {
    return (
      <Card className="border-border border-dashed">
        <CardContent className="py-16 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            {role === 'doctor'
              ? 'You have not written any prescriptions yet'
              : 'You do not have any prescriptions yet'
            }
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {paged.map((prescription) => {
        const daysLeft = prescription.status === 'active' ? getDaysUntilExpiry(prescription.expires_at) : null
        const medicinesList = Array.isArray(prescription.medicines)
          ? prescription.medicines
          : prescription.medicines ? [prescription.medicines] : []

        return (
          <Card key={prescription.id} className="border-border">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pill className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {medicinesList.length > 0
                        ? medicinesList.map(m => m?.name).filter(Boolean).join(', ')
                        : 'Prescription'
                      }
                    </CardTitle>
                    {medicinesList.length > 0 && medicinesList[0]?.generic_name && (
                      <CardDescription>
                        {medicinesList[0].generic_name}
                        {medicinesList[0].strength && ` - ${medicinesList[0].strength}`}
                      </CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {prescription.status === 'active' && <RefillBadge daysLeft={daysLeft} />}
                  <Badge className={statusColors[prescription.status]}>
                    {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {prescription.diagnosis && (
                <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-950/20 rounded text-sm">
                  <span className="text-muted-foreground">Diagnosis: </span>
                  <span className="font-medium">{prescription.diagnosis}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Dosage</span>
                  <p className="font-medium">{prescription.dosage}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Frequency</span>
                  <p className="font-medium">{prescription.frequency}</p>
                </div>
                {prescription.duration && (
                  <div>
                    <span className="text-muted-foreground">Duration</span>
                    <p className="font-medium">{prescription.duration}</p>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">Prescribed</span>
                  <p className="font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(prescription.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {medicinesList.length > 1 && (
                <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-2">All medicines in this prescription:</p>
                  <div className="space-y-1">
                    {medicinesList.map((med, idx) => (
                      <div key={idx} className="text-sm flex items-center gap-2">
                        <Pill className="h-3 w-3 text-primary" />
                        <span>{med?.name}</span>
                        {med?.strength && <span className="text-muted-foreground">({med.strength})</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-border">
                {role === 'patient' && prescription.doctors && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Stethoscope className="h-4 w-4" />
                    <span>
                      Prescribed by Dr. {prescription.doctors.profiles?.full_name || 'Unknown'}
                      {prescription.doctors.specialization && ` (${prescription.doctors.specialization})`}
                    </span>
                  </div>
                )}
                {role === 'doctor' && prescription.patients && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>
                      Patient: {prescription.patients.full_name || prescription.patients.email}
                    </span>
                  </div>
                )}
              </div>

              {prescription.notes && (
                <div className="mt-3 p-3 bg-muted/50 rounded-lg text-sm">
                  <span className="text-muted-foreground">Notes: </span>
                  {prescription.notes}
                </div>
              )}

              <div className="mt-3 flex items-center justify-between">
                {prescription.expires_at && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      Expires: {new Date(prescription.expires_at).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {role === 'doctor' && prescription.status === 'active' && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleCancel(prescription.id)}
                    disabled={cancelling === prescription.id}
                  >
                    {cancelling === prescription.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-1" />
                        Cancel Prescription
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <span>
            Showing {Math.min((page - 1) * PAGE_SIZE + 1, prescriptions.length)}–{Math.min(page * PAGE_SIZE, prescriptions.length)} of {prescriptions.length}
          </span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="px-2">Page {page} of {totalPages}</span>
            <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
