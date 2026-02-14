import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Stethoscope, Clock, CheckCircle, XCircle, Loader2, Send } from 'lucide-react'

export function PatientDoctors({ verifiedDoctors, connections, doctorProfiles, onSendRequest, onRefresh }) {
  const [search, setSearch] = useState('')
  const [sending, setSending] = useState(null)

  const connectedDoctorIds = connections
    .filter(c => c.status === 'approved')
    .map(c => c.doctor_id)

  const pendingDoctorIds = connections
    .filter(c => c.status === 'pending')
    .map(c => c.doctor_id)

  const myDoctors = verifiedDoctors.filter(d => connectedDoctorIds.includes(d.id))
  const availableDoctors = verifiedDoctors.filter(d =>
    !connectedDoctorIds.includes(d.id) && !pendingDoctorIds.includes(d.id)
  )
  const pendingDoctors = verifiedDoctors.filter(d => pendingDoctorIds.includes(d.id))

  const filteredAvailable = availableDoctors.filter(d => {
    const profile = doctorProfiles[d.user_id]
    const name = profile?.full_name || ''
    const spec = d.specialization || ''
    const term = search.toLowerCase()
    return name.toLowerCase().includes(term) || spec.toLowerCase().includes(term)
  })

  const handleSendRequest = async (doctorId) => {
    setSending(doctorId)
    try {
      await onSendRequest(doctorId)
      if (onRefresh) onRefresh()
    } catch (err) {
      console.error('Error sending request:', err)
    }
    setSending(null)
  }

  return (
    <Tabs defaultValue="my-doctors" className="space-y-6">
      <TabsList>
        <TabsTrigger value="my-doctors">My Doctors ({myDoctors.length})</TabsTrigger>
        <TabsTrigger value="pending">Pending ({pendingDoctors.length})</TabsTrigger>
        <TabsTrigger value="find">Find Doctors</TabsTrigger>
      </TabsList>

      <TabsContent value="my-doctors">
        {myDoctors.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                You don't have any connected doctors yet
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Go to "Find Doctors" to send connection requests
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myDoctors.map((doctor) => {
              const profile = doctorProfiles[doctor.user_id]
              return (
                <Card key={doctor.id} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Stethoscope className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          Dr. {profile?.full_name || 'Unknown'}
                        </CardTitle>
                        {doctor.specialization && (
                          <CardDescription>{doctor.specialization}</CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {doctor.hospital_affiliation && (
                        <p>{doctor.hospital_affiliation}</p>
                      )}
                      {profile?.email && <p>{profile.email}</p>}
                    </div>
                    <Badge className="mt-3 bg-green-100 text-green-800">
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

      <TabsContent value="pending">
        {pendingDoctors.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No pending requests</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingDoctors.map((doctor) => {
              const profile = doctorProfiles[doctor.user_id]
              return (
                <Card key={doctor.id} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Clock className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          Dr. {profile?.full_name || 'Unknown'}
                        </CardTitle>
                        {doctor.specialization && (
                          <CardDescription>{doctor.specialization}</CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-orange-100 text-orange-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending Approval
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </TabsContent>

      <TabsContent value="find">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialization..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {filteredAvailable.length === 0 ? (
            <Card className="border-border border-dashed">
              <CardContent className="py-12 text-center">
                <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {search ? 'No doctors match your search' : 'No more doctors available to connect with'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAvailable.map((doctor) => {
                const profile = doctorProfiles[doctor.user_id]
                return (
                  <Card key={doctor.id} className="border-border">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Stethoscope className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">
                            Dr. {profile?.full_name || 'Unknown'}
                          </CardTitle>
                          {doctor.specialization && (
                            <CardDescription>{doctor.specialization}</CardDescription>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm text-muted-foreground mb-3">
                        {doctor.hospital_affiliation && (
                          <p>{doctor.hospital_affiliation}</p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleSendRequest(doctor.id)}
                        disabled={sending === doctor.id}
                      >
                        {sending === doctor.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Request
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  )
}
