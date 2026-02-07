import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPrescription } from '@/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react'

export function NewPrescriptionForm({ doctor, medicines, patients }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const [patientId, setPatientId] = useState('')
  const [medicineId, setMedicineId] = useState('')
  const [dosage, setDosage] = useState('')
  const [frequency, setFrequency] = useState('')
  const [duration, setDuration] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!doctor) {
      setError('Doctor profile not found. Please complete your profile first.')
      return
    }

    if (!doctor.verified) {
      setError('Your doctor profile is not verified yet. Please wait for admin approval.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Calculate expiry date (e.g., 30 days from now)
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 30)

      await createPrescription({
        patient_id: patientId,
        doctor_id: doctor.id,
        medicine_id: medicineId,
        dosage,
        frequency,
        duration: duration || null,
        notes: notes || null,
        expires_at: expiresAt.toISOString(),
      })

      setSuccess(true)
      setTimeout(() => {
        navigate('/dashboard/prescriptions')
      }, 2000)
    } catch (insertError) {
      setError(insertError.message || 'Failed to create prescription')
      setLoading(false)
    }
  }

  if (!doctor) {
    return (
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="py-8 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Doctor Profile Required</h3>
          <p className="text-muted-foreground mb-4">
            You need to complete your doctor profile before you can write prescriptions.
          </p>
          <Button onClick={() => navigate('/dashboard/settings')}>
            Complete Profile
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (success) {
    return (
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="py-8 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Prescription Created</h3>
          <p className="text-muted-foreground">
            Redirecting to prescriptions list...
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border max-w-2xl">
      <CardHeader>
        <CardTitle>Prescription Details</CardTitle>
        <CardDescription>
          Fill in the prescription details for your patient
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="patient">Patient</Label>
            <Select value={patientId} onValueChange={setPatientId} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a patient" />
              </SelectTrigger>
              <SelectContent>
                {patients.map((patient) => (
                  <SelectItem key={patient.id} value={patient.id}>
                    {patient.full_name || patient.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicine">Medicine</Label>
            <Select value={medicineId} onValueChange={setMedicineId} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a medicine" />
              </SelectTrigger>
              <SelectContent>
                {medicines.map((medicine) => (
                  <SelectItem key={medicine.id} value={medicine.id}>
                    {medicine.name} {medicine.strength && `(${medicine.strength})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                placeholder="e.g., 500mg"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Input
                id="frequency"
                placeholder="e.g., Twice daily"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (optional)</Label>
            <Input
              id="duration"
              placeholder="e.g., 7 days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea
              id="notes"
              placeholder="Additional instructions or notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Prescription'
              )}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
