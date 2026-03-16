import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import {
  claimRequest,
  confirmRequest,
  subscribeToOpenRequests,
  subscribeToClaimedByPharmacy,
  getPharmacyByUserId,
  createPharmacy,
} from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClipboardList, CheckCircle, Loader2 } from 'lucide-react'

export function IncomingRequests() {
  const { profile } = useAuth()
  const [pharmacy, setPharmacy] = useState(null)
  const [openRequests, setOpenRequests] = useState([])
  const [claimedRequests, setClaimedRequests] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    if (!profile?.id) return
    getPharmacyByUserId(profile.id).then(async (found) => {
      if (found) { setPharmacy(found); return }
      const id = await createPharmacy({ owner_user_id: profile.id, name: profile.full_name || profile.id })
      setPharmacy({ id, owner_user_id: profile.id, name: profile.full_name || profile.id })
    })
  }, [profile?.id])

  useEffect(() => {
    const unsubscribe = subscribeToOpenRequests(setOpenRequests)
    return unsubscribe
  }, [])

  useEffect(() => {
    if (!pharmacy?.id) return
    const unsubscribe = subscribeToClaimedByPharmacy(pharmacy.id, setClaimedRequests)
    return unsubscribe
  }, [pharmacy?.id])

  const handleClaim = async (requestId) => {
    if (!pharmacy?.id) return
    setLoading(requestId)
    try {
      await claimRequest(requestId, pharmacy.id, pharmacy.name || profile?.full_name)
      toast.success('Request claimed')
    } catch (error) {
      toast.error(error.message || 'Could not claim request')
    }
    setLoading(null)
  }

  const handleConfirm = async (requestId) => {
    if (!pharmacy?.id) return
    setLoading(requestId)
    try {
      await confirmRequest(requestId, pharmacy.id)
      toast.success('Availability confirmed')
    } catch (error) {
      toast.error(error.message || 'Could not confirm request')
    }
    setLoading(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Medicine Requests</h2>
        <p className="text-muted-foreground mt-1">Respond to patient availability requests</p>
      </div>

      <Tabs defaultValue="open">
        <TabsList>
          <TabsTrigger value="open">Open ({openRequests.length})</TabsTrigger>
          <TabsTrigger value="claimed">My Claims ({claimedRequests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="mt-6">
          {openRequests.length === 0 ? (
            <Card className="border-border border-dashed">
              <CardContent className="py-16 text-center">
                <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No open requests at this time</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {openRequests.map((req) => (
                <Card key={req.id} className="border-border">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{req.medicineQuery}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {new Date(req.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleClaim(req.id)}
                        disabled={loading === req.id || !pharmacy}
                      >
                        {loading === req.id
                          ? <Loader2 className="h-4 w-4 animate-spin" />
                          : 'Claim'
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="claimed" className="mt-6">
          {claimedRequests.length === 0 ? (
            <Card className="border-border border-dashed">
              <CardContent className="py-16 text-center">
                <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No active claims</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {claimedRequests.map((req) => (
                <Card key={req.id} className="border-border">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{req.medicineQuery}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Claimed {new Date(req.claimedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleConfirm(req.id)}
                        disabled={loading === req.id}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        {loading === req.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Confirm Available
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
      </Tabs>
    </div>
  )
}
