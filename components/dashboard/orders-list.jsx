import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder, updatePrescription } from '@/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClipboardList, CheckCircle, Pill, User, Calendar, AlertCircle, Loader2 } from 'lucide-react'

export function OrdersList({ pharmacy, orders, pendingPrescriptions, onRefresh }) {
  const navigate = useNavigate()
  const [filling, setFilling] = useState(null)

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
    setFilling(prescriptionId)
    try {
      // Create prescription fill record (order)
      await createOrder({
        prescription_id: prescriptionId,
        pharmacy_id: pharmacy.id,
        quantity: 1,
        filled_at: new Date().toISOString(),
      })

      // Update prescription status
      await updatePrescription(prescriptionId, { status: 'completed' })

      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error filling prescription:', error)
    }
    setFilling(null)
  }

  return (
    <Tabs defaultValue="pending" className="space-y-6">
      <TabsList>
        <TabsTrigger value="pending">Pending ({pendingPrescriptions.length})</TabsTrigger>
        <TabsTrigger value="filled">Filled ({orders.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        {pendingPrescriptions.length === 0 ? (
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
                          {prescription.medicines?.name}
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
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Patient: {prescription.patients?.full_name || prescription.patients?.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Prescribed: {new Date(prescription.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleFill(prescription.id)}
                      disabled={filling === prescription.id}
                    >
                      {filling === prescription.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Fill Prescription
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="filled">
        {orders.length === 0 ? (
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
            {orders.map((order) => (
              <Card key={order.id} className="border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {order.prescriptions?.medicines?.name}
                        </CardTitle>
                        <CardDescription>
                          Filled on {new Date(order.filled_at).toLocaleDateString()}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Filled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Patient: {order.prescriptions?.patients?.full_name || order.prescriptions?.patients?.email}
                    </p>
                    {order.notes && (
                      <p className="mt-2 p-2 bg-muted/50 rounded">
                        Notes: {order.notes}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}
