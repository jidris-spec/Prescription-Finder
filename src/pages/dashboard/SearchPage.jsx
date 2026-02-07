import { useState, useEffect } from 'react'
import { getAllMedicines } from '@/lib/firebase/db'
import { MedicineSearch } from '@/components/dashboard/medicine-search'
import { Loader2 } from 'lucide-react'

export default function SearchPage() {
  const [medicines, setMedicines] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const medicinesData = await getAllMedicines()

        // Get first 20 medicines (already ordered by name from getAllMedicines)
        const limitedMedicines = medicinesData.slice(0, 20)

        // Extract unique categories
        const uniqueCategories = [...new Set(medicinesData.map(m => m.category).filter(Boolean))]

        setMedicines(limitedMedicines)
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('Error fetching medicines:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
        <h1 className="text-3xl font-bold text-foreground">Find Medicines</h1>
        <p className="text-muted-foreground mt-1">
          Search for medicines and check availability at pharmacies
        </p>
      </div>
      <MedicineSearch initialMedicines={medicines} categories={categories} />
    </div>
  )
}
