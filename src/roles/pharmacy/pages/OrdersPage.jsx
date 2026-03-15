import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getOrdersByPharmacy, getPharmacyByUserId, getAllActivePrescriptions, getProfile, getMedicine } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { OrdersList } from '../components/orders-list'
import { Skeleton } from '@/components/ui/skeleton'

function OrdersSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Skeleton className="h-9 w-28 rounded-md" />
        <Skeleton className="h-9 w-28 rounded-md" />
      </div>
      {[1, 2, 3].map(i => (
        <div key={i} className="border border-border rounded-lg p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-lg" />
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      ))}
    </div>
  )
}

export default function OrdersPage() {
  const { user, profile } = useAuth()
  const [pharmacy, setPharmacy] = useState(null)
  const [orders, setOrders] = useState([])
  const [pendingPrescriptions, setPendingPrescriptions] = useState([])
  const [loading, setLoading] = useState(true)

  const isPharmacyRole = profile?.role === 'pharmacist' || profile?.role === 'pharmacy'

  const fetchData = useCallback(async () => {
    if (!user || !isPharmacyRole) {
      setLoading(false)
      return
    }

    try {
      const pharmacyData = await getPharmacyByUserId(user.uid)
      setPharmacy(pharmacyData)

      let ordersData = []
      let pendingData = []
      if (pharmacyData) {
        const [fetchedOrders, activePrescriptions] = await Promise.all([
          getOrdersByPharmacy(pharmacyData.id),
          getAllActivePrescriptions()
        ])
        ordersData = fetchedOrders

        // Filter out prescriptions that have already been filled by this pharmacy
        const filledPrescriptionIds = new Set(
          (fetchedOrders || []).map(o => o.prescription_id)
        )

        // Enrich pending prescriptions with patient and medicine info
        pendingData = await Promise.all(
          activePrescriptions
            .filter(p => !filledPrescriptionIds.has(p.id))
            .map(async (p) => {
              const [patient, medicine] = await Promise.all([
                p.patient_id ? getProfile(p.patient_id) : null,
                p.medicine_id ? getMedicine(p.medicine_id) : null
              ])
              return { ...p, patients: patient, medicines: medicine }
            })
        )
      }

      setOrders(ordersData || [])
      setPendingPrescriptions(pendingData)
    } catch (error) {
      console.error('Error fetching orders:', error)
      setOrders([])
    } finally {
      setLoading(false)
    }
  }, [user, profile])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!loading && !isPharmacyRole) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-1">
          View prescription orders and fulfillment history
        </p>
      </div>
      {loading ? <OrdersSkeleton /> : (
        <OrdersList
          pharmacy={pharmacy}
          orders={orders}
          pendingPrescriptions={pendingPrescriptions}
          onRefresh={fetchData}
        />
      )}
    </div>
  )
}
