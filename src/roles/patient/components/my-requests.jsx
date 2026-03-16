import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import { createMedicineRequest, subscribeToMyRequests, getPharmacy } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ClipboardList, Loader2, Plus } from 'lucide-react'

const STATUS_BADGE = {
  open: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  claimed: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  confirmed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
}

const STATUS_LABEL = {
  open: 'Open',
  claimed: 'Pharmacy Responding',
  confirmed: 'Available',
}

export function MyRequests() {
  const { profile } = useAuth()
  const [requests, setRequests] = useState([])
  const [pharmacyNames, setPharmacyNames] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [medicineQuery, setMedicineQuery] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!profile?.id) return
    const unsubscribe = subscribeToMyRequests(profile.id, setRequests)
    return unsubscribe
  }, [profile?.id])

  useEffect(() => {
    requests.forEach((req) => {
      if (!req.claimedByPharmacyId || pharmacyNames[req.claimedByPharmacyId]) return
      getPharmacy(req.claimedByPharmacyId).then((p) => {
        if (p?.name) setPharmacyNames((prev) => ({ ...prev, [req.claimedByPharmacyId]: p.name }))
      })
    })
  }, [requests])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!medicineQuery.trim()) return
    setSubmitting(true)
    try {
      await createMedicineRequest(profile.id, medicineQuery.trim())
      toast.success('Request sent to all pharmacies')
      setMedicineQuery('')
      setShowForm(false)
    } catch (error) {
      console.error('Error creating request:', error)
      toast.error('Failed to send request')
    }
    setSubmitting(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Medicine Requests</h2>
          <p className="text-muted-foreground mt-1">Ask pharmacies about medicine availability</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          New Request
        </Button>
      </div>

      {showForm && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Request Medicine Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                placeholder="Enter medicine name..."
                value={medicineQuery}
                onChange={(e) => setMedicineQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit" disabled={submitting || !medicineQuery.trim()}>
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => { setShowForm(false); setMedicineQuery('') }}
              >
                Cancel
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {requests.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No requests yet. Click &quot;New Request&quot; to ask pharmacies about medicine availability.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {requests.map((req) => (
            <Card key={req.id} className="border-border">
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{req.medicineQuery}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge className={STATUS_BADGE[req.status] || 'bg-muted text-muted-foreground'}>
                      {STATUS_LABEL[req.status] || req.status}
                    </Badge>
                    {req.status === 'confirmed' && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {pharmacyNames[req.claimedByPharmacyId] || req.claimedByPharmacyName || 'Pharmacy'}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
