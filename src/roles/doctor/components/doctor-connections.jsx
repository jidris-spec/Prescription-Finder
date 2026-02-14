import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react'

export function DoctorConnections({ connections, patientProfiles, onAccept, onReject, onRefresh }) {
  const [processing, setProcessing] = useState(null)

  const pending = connections.filter(c => c.status === 'pending')
  const approved = connections.filter(c => c.status === 'approved')
  const rejected = connections.filter(c => c.status === 'rejected')

  const handleAction = async (connectionId, action) => {
    setProcessing(connectionId)
    try {
      if (action === 'approve') {
        await onAccept(connectionId)
      } else {
        await onReject(connectionId)
      }
      if (onRefresh) onRefresh()
    } catch (err) {
      console.error(`Error ${action}ing connection:`, err)
    }
    setProcessing(null)
  }

  return (
    <Tabs defaultValue="pending" className="space-y-6">
      <TabsList>
        <TabsTrigger value="pending">Pending ({pending.length})</TabsTrigger>
        <TabsTrigger value="approved">Approved ({approved.length})</TabsTrigger>
        <TabsTrigger value="rejected">Rejected ({rejected.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="pending">
        {pending.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No pending connection requests</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {pending.map((conn) => {
              const patient = patientProfiles[conn.patient_id]
              return (
                <Card key={conn.id} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-full">
                          <User className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-base">
                            {patient?.full_name || 'Unknown Patient'}
                          </CardTitle>
                          <CardDescription>
                            {patient?.email}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      Requested: {new Date(conn.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAction(conn.id, 'approve')}
                        disabled={processing === conn.id}
                      >
                        {processing === conn.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Accept
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleAction(conn.id, 'reject')}
                        disabled={processing === conn.id}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </TabsContent>

      <TabsContent value="approved">
        {approved.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No approved connections yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {approved.map((conn) => {
              const patient = patientProfiles[conn.patient_id]
              return (
                <Card key={conn.id} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          {patient?.full_name || 'Unknown Patient'}
                        </CardTitle>
                        <CardDescription>{patient?.email}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {patient?.phone && (
                      <p className="text-sm text-muted-foreground">{patient.phone}</p>
                    )}
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </TabsContent>

      <TabsContent value="rejected">
        {rejected.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <XCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No rejected requests</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rejected.map((conn) => {
              const patient = patientProfiles[conn.patient_id]
              return (
                <Card key={conn.id} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <User className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">{patient?.full_name || 'Unknown'}</p>
                        <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                      </div>
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
