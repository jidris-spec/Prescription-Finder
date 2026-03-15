import { useState } from 'react'
import { createMedicine, deleteMedicine } from '@/shared/lib/firebase/db'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Search, Pill, Plus, Loader2, Trash2, Eye } from 'lucide-react'

export function MedicinesManager({ medicines, onRefresh }) {

  const [search, setSearch] = useState('')
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [viewMedicine, setViewMedicine] = useState(null)
  const [loading, setLoading] = useState(false)

  // Form state
  const [name, setName] = useState('')
  const [genericName, setGenericName] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [dosageForm, setDosageForm] = useState('')
  const [strength, setStrength] = useState('')
  const [activeSubstance, setActiveSubstance] = useState('')
  const [description, setDescription] = useState('')
  const [requiresPrescription, setRequiresPrescription] = useState(false)

  const filteredMedicines = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.generic_name?.toLowerCase().includes(search.toLowerCase()) ||
    m.brand?.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = async () => {
    if (!name) return

    setLoading(true)
    try {
      await createMedicine({
        name,
        generic_name: genericName || null,
        brand: brand || null,
        category: category || null,
        dosage_form: dosageForm || null,
        strength: strength || null,
        active_substance: activeSubstance || null,
        description: description || null,
        requires_prescription: requiresPrescription,
      })

      setIsAddOpen(false)
      resetForm()
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error adding medicine:', error)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this medicine?')) return

    try {
      await deleteMedicine(id)
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error deleting medicine:', error)
    }
  }

  const resetForm = () => {
    setName('')
    setGenericName('')
    setBrand('')
    setCategory('')
    setDosageForm('')
    setStrength('')
    setActiveSubstance('')
    setDescription('')
    setRequiresPrescription(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Medicine
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Medicine</DialogTitle>
              <DialogDescription>
                Add a new medicine to the database
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input
                  placeholder="Medicine name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Generic Name</Label>
                  <Input
                    placeholder="Generic name"
                    value={genericName}
                    onChange={(e) => setGenericName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Input
                    placeholder="Brand name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input
                    placeholder="e.g., Antibiotic"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dosage Form</Label>
                  <Input
                    placeholder="e.g., Tablet"
                    value={dosageForm}
                    onChange={(e) => setDosageForm(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Strength</Label>
                <Input
                  placeholder="e.g., 500mg"
                  value={strength}
                  onChange={(e) => setStrength(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Active Substance</Label>
                <Input
                  placeholder="e.g., Amoxicillin"
                  value={activeSubstance}
                  onChange={(e) => setActiveSubstance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Medicine description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rx"
                  checked={requiresPrescription}
                  onCheckedChange={(checked) => setRequiresPrescription(checked === true)}
                />
                <Label htmlFor="rx" className="cursor-pointer">
                  Requires prescription
                </Label>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAdd} disabled={loading || !name}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Add Medicine'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      {filteredMedicines.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {search ? 'No medicines found matching your search' : 'No medicines in database'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Generic Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Rx</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMedicines.map((medicine) => (
                <TableRow key={medicine.id}>
                  <TableCell className="font-medium">{medicine.name}</TableCell>
                  <TableCell className="text-muted-foreground">{medicine.generic_name || '-'}</TableCell>
                  <TableCell className="text-muted-foreground">{medicine.brand || '-'}</TableCell>
                  <TableCell>
                    {medicine.category ? (
                      <Badge variant="outline">{medicine.category}</Badge>
                    ) : '-'}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{medicine.strength || '-'}</TableCell>
                  <TableCell>
                    {medicine.requires_prescription ? (
                      <Badge variant="secondary">Yes</Badge>
                    ) : (
                      <span className="text-muted-foreground">No</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewMedicine(medicine)}
                      >
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(medicine.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* View Medicine Dialog */}
      <Dialog open={!!viewMedicine} onOpenChange={(open) => !open && setViewMedicine(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-primary" />
              {viewMedicine?.name}
            </DialogTitle>
            {viewMedicine?.generic_name && (
              <DialogDescription>{viewMedicine.generic_name}</DialogDescription>
            )}
          </DialogHeader>
          {viewMedicine && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {viewMedicine.brand && (
                  <div>
                    <p className="text-muted-foreground">Brand</p>
                    <p className="font-medium">{viewMedicine.brand}</p>
                  </div>
                )}
                {viewMedicine.category && (
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{viewMedicine.category}</p>
                  </div>
                )}
                {viewMedicine.strength && (
                  <div>
                    <p className="text-muted-foreground">Strength</p>
                    <p className="font-medium">{viewMedicine.strength}</p>
                  </div>
                )}
                {viewMedicine.dosage_form && (
                  <div>
                    <p className="text-muted-foreground">Dosage Form</p>
                    <p className="font-medium">{viewMedicine.dosage_form}</p>
                  </div>
                )}
                {viewMedicine.active_substance && (
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Active Substance</p>
                    <p className="font-medium">{viewMedicine.active_substance}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <p className="text-muted-foreground">Requires Prescription</p>
                  <p className="font-medium">{viewMedicine.requires_prescription ? 'Yes' : 'No'}</p>
                </div>
              </div>
              {viewMedicine.description ? (
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-1">Description</p>
                  <p className="text-sm leading-relaxed">{viewMedicine.description}</p>
                </div>
              ) : (
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">No description provided.</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}