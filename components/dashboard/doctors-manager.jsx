import { useState } from 'react'
import { updateDoctor } from '@/lib/firebase/db'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Stethoscope, CheckCircle, XCircle, Loader2, Calendar, FileText } from 'lucide-react'

export function DoctorsManager({ doctors, onRefresh }) {

  const [search, setSearch] = useState('')
  const [verifying, setVerifying] = useState(null)

  const filteredDoctors = doctors.filter((d) =>
    d.profiles?.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    d.profiles?.email?.toLowerCase().includes(search.toLowerCase()) ||
    d.license_number.toLowerCase().includes(search.toLowerCase()) ||
    d.specialization?.toLowerCase().includes(search.toLowerCase())
  )

  const handleVerify = async (id, verified) => {
    setVerifying(id)
    try {
      await updateDoctor(id, { verified })
      if (onRefresh) {
        await onRefresh()
      }
    } catch (error) {
      console.error('Error updating doctor verification:', error)
    } finally {
      setVerifying(null)
    }
  }

  const unverifiedCount = doctors.filter(d => !d.verified).length
  const verifiedCount = doctors.filter(d => d.verified).length

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Total</CardDescription>
            <CardTitle className="text-2xl">{doctors.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Verified</CardDescription>
            <CardTitle className="text-2xl text-green-600">{verifiedCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-2">
            <CardDescription>Pending Verification</CardDescription>
            <CardTitle className="text-2xl text-orange-600">{unverifiedCount}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search doctors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Doctors List */}
      {filteredDoctors.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {search ? 'No doctors found matching your search' : 'No doctors registered yet'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="border-border">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Dr. {doctor.profiles?.full_name || 'Unknown'}
                      </CardTitle>
                      <CardDescription>{doctor.profiles?.email}</CardDescription>
                    </div>
                  </div>
                  <Badge className={doctor.verified 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                  }>
                    {doctor.verified ? 'Verified' : 'Pending'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    License: {doctor.license_number}
                  </p>
                  {doctor.specialization && (
                    <p>Specialization: {doctor.specialization}</p>
                  )}
                  {doctor.hospital_affiliation && (
                    <p>Hospital: {doctor.hospital_affiliation}</p>
                  )}
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Registered: {new Date(doctor.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  {doctor.verified ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleVerify(doctor.id, false)}
                      disabled={verifying === doctor.id}
                    >
                      {verifying === doctor.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <XCircle className="mr-2 h-4 w-4" />
                          Revoke
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      onClick={() => handleVerify(doctor.id, true)}
                      disabled={verifying === doctor.id}
                    >
                      {verifying === doctor.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Verify
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}