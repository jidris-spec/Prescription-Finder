import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/src/contexts/AuthContext'
import { getPharmacyByUserId, getInventoryByPharmacy, getAllMedicines } from '@/lib/firebase/db'
import { InventoryManager } from '@/components/dashboard/inventory-manager'
import { Loader2 } from 'lucide-react'

export default function InventoryPage() {
  const { user, profile } = useAuth()
  const [pharmacy, setPharmacy] = useState(null)
  const [inventory, setInventory] = useState([])
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    if (!user || profile?.role !== 'pharmacist') {
      setLoading(false)
      return
    }

    try {
      const pharmacyData = await getPharmacyByUserId(user.uid)
      setPharmacy(pharmacyData)

      let inventoryData = []
      if (pharmacyData) {
        inventoryData = await getInventoryByPharmacy(pharmacyData.id)
      }

      const medicinesData = await getAllMedicines()

      setInventory(inventoryData)
      setMedicines(medicinesData)
    } catch (error) {
      console.error('Error fetching inventory data:', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [user, profile])

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
