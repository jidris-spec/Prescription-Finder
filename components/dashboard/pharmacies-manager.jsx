import { useState } from 'react'
import { updatePharmacy } from '@/lib/firebase/db'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Building2, MapPin, Phone, Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react'

export function PharmaciesManager({ pharmacies, onRefresh }) {

  const [search, setSearch] = useState('')
  const [verifying, setVerifying] = useState(null)

  const filteredPharmacies = pharmacies.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.address.toLowerCase().includes(search.toLowerCase()) ||
    p.license_number.toLowerCase().includes(search.toLowerCase())
  )

  const handleVerify = async (id, verified) => {
    setVerifying(id)
    try {
      await updatePharmacy(id, { verified })
      if (onRefresh) {
        await onRefresh()
      }
    } catch (error) {
      console.error('Error updating pharmacy verification:', error)
    } finally {
      setVerifying(null)
    }
  }

  const unverifiedCount = pharmacies.filter(p => !p.verified).length
  const verifiedCount = pharmacies.filter(p => p.verified).length

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Total</CardDescription>
            <CardTitle className="text-2xl">{pharmacies.length}</CardTitle>
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
          placeholder="Search pharmacies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Pharmacies List */}
      {filteredPharmacies.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {search ? 'No pharmacies found matching your search' : 'No pharmacies registered yet'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredPharmacies.map((pharmacy) => (
            <Card key={pharmacy.id} className="border-border">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pharmacy.name}</CardTitle>
                      <CardDescription>License: {pharmacy.license_number}</CardDescription>
                    </div>
                  </div>
                  <Badge className={pharmacy.verified 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                  }>
                    {pharmacy.verified ? 'Verified' : 'Pending'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {pharmacy.address}
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      {pharmacy.phone}
                    </p>
                    {pharmacy.email && (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {pharmacy.email}
                      </p>
                    )}
                  </div>
                  <div className="text-muted-foreground">
                    <p>Owner: {pharmacy.profiles?.full_name || pharmacy.profiles?.email || 'Unknown'}</p>
                    <p>Registered: {new Date(pharmacy.created_at).toLocaleDateString()}</p>
                    {pharmacy.operating_hours && (
                      <p>Hours: {pharmacy.operating_hours}</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {pharmacy.verified ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleVerify(pharmacy.id, false)}
                      disabled={verifying === pharmacy.id}
                    >
                      {verifying === pharmacy.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <XCircle className="mr-2 h-4 w-4" />
                          Revoke Verification
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      onClick={() => handleVerify(pharmacy.id, true)}
                      disabled={verifying === pharmacy.id}
                    >
                      {verifying === pharmacy.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Verify Pharmacy
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