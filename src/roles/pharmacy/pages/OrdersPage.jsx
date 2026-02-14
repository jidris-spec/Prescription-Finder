import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getOrdersByPharmacy, getPharmacyByUserId, getAllActivePrescriptions, getProfile, getMedicine } from '@/shared/lib/firebase/db'
import { useAuth } from '@/context/AuthContext'
import { OrdersList } from '../components/orders-list'
import { Loader2 } from 'lucide-react'

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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-1">
          View prescription orders and fulfillment history
        </p>
      </div>
      <OrdersList
        pharmacy={pharmacy}
        orders={orders}
        pendingPrescriptions={pendingPrescriptions}
        onRefresh={fetchData}
      />
    </div>
  )
}
