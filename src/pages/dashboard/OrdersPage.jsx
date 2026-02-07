import { useState, useEffect, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { getOrdersByPharmacy, getPharmacyByUserId } from '@/lib/firebase/db'
import { useAuth } from '@/src/contexts/AuthContext'
import { OrdersList } from '@/components/dashboard/orders-list'
import { Loader2 } from 'lucide-react'

export default function OrdersPage() {
  const { user, profile } = useAuth()
  const [pharmacy, setPharmacy] = useState(null)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user || profile?.role !== 'pharmacist') {
      setLoading(false)
      return
    }

    try {
      const pharmacyData = await getPharmacyByUserId(user.uid)
      setPharmacy(pharmacyData)

      let ordersData = []
      if (pharmacyData) {
        ordersData = await getOrdersByPharmacy(pharmacyData.id)
      }

      setOrders(ordersData || [])
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

  if (!loading && profile?.role !== 'pharmacist') {
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
        onRefresh={fetchData}
      />
    </div>
  )
}
