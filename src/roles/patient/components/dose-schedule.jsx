import { useState } from 'react'
import { toast } from 'sonner'
import { createDoseLog } from '@/shared/lib/firebase/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, Pill, Clock, Loader2, CalendarDays } from 'lucide-react'

const TIME_SLOTS = {
  'Once daily': ['08:00'],
  'Twice daily': ['08:00', '20:00'],
  'Three times daily': ['08:00', '14:00', '20:00'],
  'Four times daily': ['08:00', '12:00', '16:00', '20:00'],
}

function generateSchedule(prescriptions, doseLogs) {
  const schedule = []

  for (const prescription of prescriptions) {
    if (prescription.status !== 'active') continue

    const frequency = prescription.frequency || ''
    const slots = TIME_SLOTS[frequency] || ['08:00']
    const medicines = Array.isArray(prescription.medicines)
      ? prescription.medicines
      : prescription.medicines ? [prescription.medicines] : []

    const medicineName = medicines.map(m => m?.name).filter(Boolean).join(', ') || 'Medicine'

    for (const time of slots) {
      const isTaken = doseLogs.some(
        log => log.prescription_id === prescription.id && log.time_slot === time
      )

      schedule.push({
        prescriptionId: prescription.id,
        medicineName,
        dosage: prescription.dosage,
        time,
        isTaken,
        frequency,
      })
    }
  }

  return schedule.sort((a, b) => a.time.localeCompare(b.time))
}

export function DoseSchedule({ prescriptions, doseLogs, patientId, onRefresh }) {
  const [marking, setMarking] = useState(null)

  const schedule = generateSchedule(prescriptions, doseLogs)
  const totalDoses = schedule.length
  const takenDoses = schedule.filter(s => s.isTaken).length
  const completionPercent = totalDoses > 0 ? Math.round((takenDoses / totalDoses) * 100) : 0

  const handleMarkTaken = async (entry) => {
    const key = `${entry.prescriptionId}-${entry.time}`
    setMarking(key)
    try {
      await createDoseLog({
        patient_id: patientId,
        prescription_id: entry.prescriptionId,
        time_slot: entry.time,
        date: new Date().toISOString().split('T')[0],
      })
      if (onRefresh) await onRefresh()
      toast.success(`${entry.medicineName} marked as taken`)
    } catch (err) {
      console.error('Error marking dose:', err)
      toast.error('Failed to mark dose. Please try again.')
    }
    setMarking(null)
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (schedule.length === 0) {
    return (
      <Card className="border-border border-dashed">
        <CardContent className="py-16 text-center">
          <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            No active prescriptions to schedule
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            When your doctor creates a prescription, your daily schedule will appear here
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <Card className="border-border">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Today's Progress</CardTitle>
              <CardDescription>{today}</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{completionPercent}%</p>
              <p className="text-sm text-muted-foreground">{takenDoses}/{totalDoses} doses</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-muted rounded-full h-3">
            <div
              className="bg-primary rounded-full h-3 transition-all"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Schedule */}
      <div className="space-y-3">
        {schedule.map((entry) => {
          const key = `${entry.prescriptionId}-${entry.time}`
          const isMarking = marking === key

          return (
            <Card key={key} className={`border-border ${entry.isTaken ? 'opacity-60' : ''}`}>
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${entry.isTaken ? 'bg-green-100' : 'bg-primary/10'}`}>
                      {entry.isTaken ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold text-lg">{entry.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Pill className="h-3 w-3 text-primary" />
                        <span className="text-sm font-medium">{entry.medicineName}</span>
                        <span className="text-sm text-muted-foreground">- {entry.dosage}</span>
                      </div>
                    </div>
                  </div>

                  {entry.isTaken ? (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Taken
                    </Badge>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handleMarkTaken(entry)}
                      disabled={isMarking}
                    >
                      {isMarking ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        'Mark as Taken'
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
