import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Pill, Calendar, Clock, User, Stethoscope } from 'lucide-react'

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  completed: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

export function PrescriptionsList({ prescriptions, role }) {
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
      {prescriptions.map((prescription) => (
        <Card key={prescription.id} className="border-border">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    {prescription.medicines?.name}
                  </CardTitle>
                  {prescription.medicines?.generic_name && (
                    <CardDescription>
                      {prescription.medicines.generic_name}
                      {prescription.medicines.strength && ` - ${prescription.medicines.strength}`}
                    </CardDescription>
                  )}
                </div>
              </div>
              <Badge className={statusColors[prescription.status]}>
                {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
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

            {/* Doctor/Patient Info */}
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

            {prescription.expires_at && (
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  Expires: {new Date(prescription.expires_at).toLocaleDateString()}
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
