import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPrescription, addPrescriptionItem } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, AlertCircle, CheckCircle, Plus, X } from 'lucide-react'

function parseDurationDays(duration) {
  if (!duration) return 30
  const match = duration.match(/(\d+)/)
  if (!match) return 30
  return parseInt(match[1], 10) || 30
}

export function NewPrescriptionForm({ doctor, medicines, patients }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const [patientId, setPatientId] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [medicineRows, setMedicineRows] = useState([
    { medicineId: '', dosage: '', frequency: '', duration: '' }
  ])
  const [notes, setNotes] = useState('')

  const addMedicineRow = () => {
    setMedicineRows([...medicineRows, { medicineId: '', dosage: '', frequency: '', duration: '' }])
  }

  const removeMedicineRow = (index) => {
    if (medicineRows.length <= 1) return
    setMedicineRows(medicineRows.filter((_, i) => i !== index))
  }

  const updateMedicineRow = (index, field, value) => {
    const updated = [...medicineRows]
    updated[index] = { ...updated[index], [field]: value }
    setMedicineRows(updated)
  }

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

    if (!patientId) {
      setError('Please select a patient.')
      return
    }

    const validRows = medicineRows.filter(r => r.medicineId && r.dosage && r.frequency)
    if (validRows.length === 0) {
      setError('Please add at least one medicine with dosage and frequency.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Use the longest duration for the prescription expiry
      const maxDays = Math.max(...validRows.map(r => parseDurationDays(r.duration)))
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + maxDays)

      // Create the main prescription with the first medicine (backwards compatible)
      const firstRow = validRows[0]
      const prescriptionId = await createPrescription({
        patient_id: patientId,
        doctor_id: doctor.id,
        medicine_id: firstRow.medicineId,
        dosage: firstRow.dosage,
        frequency: firstRow.frequency,
        duration: firstRow.duration || null,
        diagnosis: diagnosis || null,
        notes: notes || null,
        expires_at: expiresAt.toISOString(),
      })

      // Add all medicines as prescription items
      await Promise.all(
        validRows.map((row) =>
          addPrescriptionItem({
            prescription_id: prescriptionId,
            medicine_id: row.medicineId,
            dosage: row.dosage,
            frequency: row.frequency,
            duration: row.duration || null,
          })
        )
      )

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
    <Card className="border-border max-w-3xl">
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

          {patients.length === 0 && (
            <div className="p-3 text-sm text-orange-800 bg-orange-100 rounded-md flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              No connected patients. Patients must send you a connection request first.
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="patient">Patient</Label>
            <Select value={patientId} onValueChange={setPatientId} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a connected patient" />
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
            <Label htmlFor="diagnosis">Diagnosis (optional)</Label>
            <Input
              id="diagnosis"
              placeholder="e.g., Essential Hypertension, Type 2 Diabetes"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
            />
          </div>

          {/* Medicine Rows */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Medicines</Label>
              <Button type="button" variant="outline" size="sm" onClick={addMedicineRow}>
                <Plus className="h-4 w-4 mr-1" />
                Add Medicine
              </Button>
            </div>

            {medicineRows.map((row, index) => (
              <div key={index} className="p-4 border border-border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Medicine {index + 1}
                  </span>
                  {medicineRows.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMedicineRow(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Select
                    value={row.medicineId}
                    onValueChange={(val) => updateMedicineRow(index, 'medicineId', val)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a medicine" />
                    </SelectTrigger>
                    <SelectContent>
                      {medicines.map((medicine) => (
                        <SelectItem key={medicine.id} value={medicine.id}>
                          {medicine.name} {medicine.strength && `(${medicine.strength})`}
                          {medicine.active_substance && ` - ${medicine.active_substance}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Dosage</Label>
                    <Input
                      placeholder="e.g., 500mg"
                      value={row.dosage}
                      onChange={(e) => updateMedicineRow(index, 'dosage', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Frequency</Label>
                    <Select
                      value={row.frequency}
                      onValueChange={(val) => updateMedicineRow(index, 'frequency', val)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Once daily">Once daily</SelectItem>
                        <SelectItem value="Twice daily">Twice daily</SelectItem>
                        <SelectItem value="Three times daily">Three times daily</SelectItem>
                        <SelectItem value="Four times daily">Four times daily</SelectItem>
                        <SelectItem value="As needed">As needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Duration</Label>
                    <Select
                      value={row.duration}
                      onValueChange={(val) => updateMedicineRow(index, 'duration', val)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7 days">7 days</SelectItem>
                        <SelectItem value="14 days">14 days</SelectItem>
                        <SelectItem value="30 days">30 days</SelectItem>
                        <SelectItem value="60 days">60 days</SelectItem>
                        <SelectItem value="90 days">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
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
            <Button type="submit" disabled={loading || patients.length === 0}>
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
