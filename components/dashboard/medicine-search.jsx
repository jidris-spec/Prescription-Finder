import { useState, useEffect, useCallback } from 'react'
import { searchMedicines as firebaseSearchMedicines, getAllMedicines, searchPharmaciesWithMedicine } from '@/lib/firebase/db'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Pill, MapPin, DollarSign, Package, Loader2, AlertCircle } from 'lucide-react'

export function MedicineSearch({ initialMedicines, categories }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [medicines, setMedicines] = useState(initialMedicines)
  const [loading, setLoading] = useState(false)
  const [selectedMedicine, setSelectedMedicine] = useState(null)

  const searchMedicinesHandler = useCallback(async () => {
    setLoading(true)
    try {
      let results
      if (searchQuery) {
        // Use Firebase search function
        results = await firebaseSearchMedicines(searchQuery)
      } else {
        // Get all medicines
        results = await getAllMedicines()
      }

      // Filter by category if specified
      if (category && category !== 'all') {
        results = results.filter(m => m.category === category)
      }

      // Limit to 50 results
      results = results.slice(0, 50)

      setMedicines(results)
    } catch (error) {
      console.error('Error searching medicines:', error)
    }
    setLoading(false)
  }, [searchQuery, category])

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchMedicinesHandler()
    }, 300)
    return () => clearTimeout(debounce)
  }, [searchMedicinesHandler])

  const loadInventory = async (medicine) => {
    try {
      const inventoryWithPharmacies = await searchPharmaciesWithMedicine(medicine.id)
      setSelectedMedicine({
        ...medicine,
        pharmacy_inventory: inventoryWithPharmacies.map(item => ({
          ...item,
          pharmacies: item.pharmacy
        }))
      })
    } catch (error) {
      console.error('Error loading inventory:', error)
      setSelectedMedicine({
        ...medicine,
        pharmacy_inventory: []
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, brand, or generic name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Medicine List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">
            {loading ? 'Searching...' : `${medicines.length} medicines found`}
          </h2>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : medicines.length === 0 ? (
            <Card className="border-border">
              <CardContent className="py-12 text-center">
                <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No medicines found matching your search</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {medicines.map((medicine) => (
                <Card
                  key={medicine.id}
                  className={`border-border cursor-pointer transition-colors hover:border-primary/50 ${selectedMedicine?.id === medicine.id ? 'border-primary bg-primary/5' : ''
                    }`}
                  onClick={() => loadInventory(medicine)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{medicine.name}</CardTitle>
                        {medicine.generic_name && (
                          <CardDescription>{medicine.generic_name}</CardDescription>
                        )}
                      </div>
                      {medicine.requires_prescription && (
                        <Badge variant="secondary" className="text-xs">
                          Rx Required
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {medicine.brand && (
                        <span className="flex items-center gap-1">
                          <Package className="h-3 w-3" />
                          {medicine.brand}
                        </span>
                      )}
                      {medicine.strength && (
                        <span>| {medicine.strength}</span>
                      )}
                      {medicine.dosage_form && (
                        <span>| {medicine.dosage_form}</span>
                      )}
                    </div>
                    {medicine.category && (
                      <Badge variant="outline" className="mt-2 text-xs">
                        {medicine.category}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Inventory Panel */}
        <div className="lg:sticky lg:top-4 h-fit">
          {selectedMedicine ? (
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{selectedMedicine.name}</CardTitle>
                {selectedMedicine.description && (
                  <CardDescription>{selectedMedicine.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Medicine Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {selectedMedicine.generic_name && (
                    <div>
                      <span className="text-muted-foreground">Generic Name</span>
                      <p className="font-medium">{selectedMedicine.generic_name}</p>
                    </div>
                  )}
                  {selectedMedicine.brand && (
                    <div>
                      <span className="text-muted-foreground">Brand</span>
                      <p className="font-medium">{selectedMedicine.brand}</p>
                    </div>
                  )}
                  {selectedMedicine.strength && (
                    <div>
                      <span className="text-muted-foreground">Strength</span>
                      <p className="font-medium">{selectedMedicine.strength}</p>
                    </div>
                  )}
                  {selectedMedicine.dosage_form && (
                    <div>
                      <span className="text-muted-foreground">Form</span>
                      <p className="font-medium">{selectedMedicine.dosage_form}</p>
                    </div>
                  )}
                </div>

                {selectedMedicine.requires_prescription && (
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg text-sm">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>This medicine requires a prescription</span>
                  </div>
                )}

                {/* Pharmacy Availability */}
                <div className="border-t border-border pt-4">
                  <h3 className="font-semibold mb-3">Available at Pharmacies</h3>
                  {selectedMedicine.pharmacy_inventory && selectedMedicine.pharmacy_inventory.length > 0 ? (
                    <div className="space-y-3">
                      {selectedMedicine.pharmacy_inventory.map((inv) => (
                        <div key={inv.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium">{inv.pharmacies?.name}</p>
                              {inv.pharmacies?.address && (
                                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                  <MapPin className="h-3 w-3" />
                                  {inv.pharmacies.address}
                                </p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-primary flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {inv.price?.toFixed(2)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {inv.quantity} in stock
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground py-4 text-center">
                      No pharmacies currently have this medicine in stock
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border border-dashed">
              <CardContent className="py-16 text-center">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select a medicine to view details and pharmacy availability
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
