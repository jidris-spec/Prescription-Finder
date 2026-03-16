import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { createOrder, updatePrescription } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ClipboardList, CheckCircle, Pill, User, Calendar, AlertCircle, Loader2, XCircle, AlertTriangle } from 'lucide-react'

const FULFILLMENT_OPTIONS = [
  { value: 'ready', label: 'Ready for Pickup', color: 'bg-green-100 text-green-800' },
  { value: 'partially_available', label: 'Partially Available', color: 'bg-orange-100 text-orange-800' },
  { value: 'not_available', label: 'Not Available', color: 'bg-red-100 text-red-800' },
  { value: 'filled_generic', label: 'Filled with Generic', color: 'bg-blue-100 text-blue-800' },
]

export function OrdersList({ pharmacy, orders, pendingPrescriptions, onRefresh }) {
  const navigate = useNavigate()
  const [filling, setFilling] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState({})
  const [fulfillmentNotes, setFulfillmentNotes] = useState({})

  if (!pharmacy) {
    return (
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="py-8 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Pharmacy Not Setup</h3>
          <p className="text-muted-foreground mb-4">
            You need to register your pharmacy before viewing orders.
          </p>
          <Button onClick={() => navigate('/dashboard/settings')}>
            Setup Pharmacy
          </Button>
        </CardContent>
      </Card>
    )
  }

  const handleFill = async (prescriptionId) => {
    const status = selectedStatus[prescriptionId] || 'ready'
    const notes = fulfillmentNotes[prescriptionId] || ''

    setFilling(prescriptionId)
    try {
      await createOrder({
        prescription_id: prescriptionId,
        pharmacy_id: pharmacy.id,
        quantity: 1,
        fulfillment_status: status,
        fulfillment_notes: notes || null,
        filled_at: new Date().toISOString(),
      })

      // Only mark as completed if ready or filled_generic
      if (status === 'ready' || status === 'filled_generic') {
        await updatePrescription(prescriptionId, { status: 'completed' })
      }

      toast.success('Prescription filled successfully')
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error filling prescription:', error)
      toast.error('Failed to fill prescription')
    }
    setFilling(null)
  }

  const getFulfillmentBadge = (status) => {
    const option = FULFILLMENT_OPTIONS.find(o => o.value === status)
    return option || FULFILLMENT_OPTIONS[0]
  }

  return (
    <Tabs defaultValue="pending" className="space-y-6">
      <TabsList>
        <TabsTrigger value="pending">Pending ({pendingPrescriptions?.length || 0})</TabsTrigger>
        <TabsTrigger value="filled">Filled ({orders?.length || 0})</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        {!pendingPrescriptions || pendingPrescriptions.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No pending prescriptions at this time
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {pendingPrescriptions.map((prescription) => (
              <Card key={prescription.id} className="border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Pill className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {prescription.medicines?.name || 'Medicine'}
                        </CardTitle>
                        <CardDescription>
                          {prescription.dosage} - {prescription.frequency}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Patient: {prescription.patients?.full_name || prescription.patients?.email || 'Unknown'}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Prescribed: {new Date(prescription.created_at).toLocaleDateString()}
                      </p>
                      {prescription.diagnosis && (
                        <p className="text-xs">Diagnosis: {prescription.diagnosis}</p>
                      )}
                    </div>

                    {/* Fulfillment Options */}
                    <div className="p-3 bg-muted/30 rounded-lg space-y-3">
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-muted-foreground mb-1 block">Status</label>
                          <Select
                            value={selectedStatus[prescription.id] || 'ready'}
                            onValueChange={(val) => setSelectedStatus(prev => ({ ...prev, [prescription.id]: val }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {FULFILLMENT_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-muted-foreground mb-1 block">Notes (optional)</label>
                          <Input
                            placeholder="e.g., Generic equivalent used"
                            value={fulfillmentNotes[prescription.id] || ''}
                            onChange={(e) => setFulfillmentNotes(prev => ({ ...prev, [prescription.id]: e.target.value }))}
                          />
                        </div>
                      </div>
                      <Button
                        onClick={() => handleFill(prescription.id)}
                        disabled={filling === prescription.id}
                        className="w-full"
                      >
                        {filling === prescription.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Confirm Fulfillment
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="filled">
        {!orders || orders.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No prescriptions have been filled yet
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const badge = getFulfillmentBadge(order.fulfillment_status)
              return (
                <Card key={order.id} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {order.prescriptions?.medicines?.name || 'Medicine'}
                          </CardTitle>
                          <CardDescription>
                            Filled on {new Date(order.filled_at).toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={badge.color}>
                        {badge.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Patient: {order.prescriptions?.patients?.full_name || order.prescriptions?.patients?.email || 'Unknown'}
                      </p>
                      {order.fulfillment_notes && (
                        <p className="mt-2 p-2 bg-muted/50 rounded">
                          Notes: {order.fulfillment_notes}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}
