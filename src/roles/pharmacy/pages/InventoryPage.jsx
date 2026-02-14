import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { getPharmacyByUserId, getInventoryByPharmacy, getAllMedicines } from '@/shared/lib/firebase/db'
import { InventoryManager } from '../components/inventory-manager'
import { Loader2 } from 'lucide-react'

export default function InventoryPage() {
  const { user, profile } = useAuth()
  const [pharmacy, setPharmacy] = useState(null)
  const [inventory, setInventory] = useState([])
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)

  const isPharmacyRole = profile?.role === 'pharmacist' || profile?.role === 'pharmacy'

  const fetchData = async () => {
    if (!user || !isPharmacyRole) {
      setLoading(false)
      return
    }

    try {
      const pharmacyData = await getPharmacyByUserId(user.uid)
      setPharmacy(pharmacyData)

      if (pharmacyData) {
        try {
          const inventoryData = await getInventoryByPharmacy(pharmacyData.id)
          setInventory(inventoryData)
        } catch (error) {
          console.error('Error fetching inventory:', error)
        }
      }
    } catch (error) {
      console.error('Error fetching pharmacy data:', error)
    }

    try {
      const medicinesData = await getAllMedicines()
      setMedicines(medicinesData)
    } catch (error) {
      console.error('Error fetching medicines:', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [user, profile])

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
        <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
        <p className="text-muted-foreground mt-1">
          {pharmacy ? `Managing inventory for ${pharmacy.name}` : 'Setup your pharmacy to manage inventory'}
        </p>
      </div>
      <InventoryManager
        pharmacy={pharmacy}
        inventory={inventory}
        medicines={medicines}
        onRefresh={fetchData}
      />
    </div>
  )
}
