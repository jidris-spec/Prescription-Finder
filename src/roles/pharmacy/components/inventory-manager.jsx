import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addInventoryItem, updateInventoryItem, deleteInventoryItem } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Package, AlertCircle, Loader2, Pencil, Trash2 } from 'lucide-react'

export function InventoryManager({ pharmacy, inventory, medicines, onRefresh }) {
  const navigate = useNavigate()
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // Add form state
  const [medicineId, setMedicineId] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [batchNumber, setBatchNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  if (!pharmacy) {
    return (
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="py-8 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Pharmacy Not Setup</h3>
          <p className="text-muted-foreground mb-4">
            You need to register your pharmacy before managing inventory.
          </p>
          <Button onClick={() => navigate('/dashboard/settings')}>
            Setup Pharmacy
          </Button>
        </CardContent>
      </Card>
    )
  }

  const handleAdd = async () => {
    if (!medicineId || !quantity || !price) return

    setLoading(true)
    try {
      await addInventoryItem({
        pharmacy_id: pharmacy.id,
        medicine_id: medicineId,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        batch_number: batchNumber || null,
        expiry_date: expiryDate || null,
      })

      setIsAddOpen(false)
      resetForm()
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error adding inventory:', error)
    }
    setLoading(false)
  }

  const handleUpdate = async (id, updates) => {
    try {
      await updateInventoryItem(id, updates)
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error updating inventory:', error)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to remove this item?')) return

    try {
      await deleteInventoryItem(id)
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error deleting inventory:', error)
    }
  }

  const resetForm = () => {
    setMedicineId('')
    setQuantity('')
    setPrice('')
    setBatchNumber('')
    setExpiryDate('')
  }

  // Get medicines not already in inventory
  const availableMedicines = medicines.filter(
    (m) => !inventory.some((i) => i.medicine_id === m.id)
  )

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {inventory.length} items in inventory
        </div>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Medicine
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Medicine to Inventory</DialogTitle>
              <DialogDescription>
                Add a new medicine to your pharmacy inventory
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Medicine</Label>
                <Select value={medicineId} onValueChange={setMedicineId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableMedicines.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.name || m.brand_name} {m.strength && `(${m.strength})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    placeholder="100"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Price ($)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="9.99"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Batch Number (optional)</Label>
                  <Input
                    placeholder="BATCH-001"
                    value={batchNumber}
                    onChange={(e) => setBatchNumber(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Expiry Date (optional)</Label>
                  <Input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAdd} disabled={loading || !medicineId || !quantity || !price}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Add to Inventory'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Inventory Table */}
      {inventory.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Your inventory is empty. Add medicines to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicine</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.medicines?.name || item.medicines?.brand_name || 'Unknown'}</p>
                      {item.medicines?.strength && (
                        <p className="text-sm text-muted-foreground">{item.medicines.strength}</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.quantity < 10 ? 'destructive' : 'secondary'}>
                      {item.quantity}
                    </Badge>
                  </TableCell>
                  <TableCell>${item.price?.toFixed(2) || '0.00'}</TableCell>
                  <TableCell>{item.batch_number || '-'}</TableCell>
                  <TableCell>
                    {item.expiry_date
                      ? new Date(item.expiry_date).toLocaleDateString()
                      : '-'
                    }
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const newQty = prompt('Enter new quantity:', String(item.quantity))
                          if (newQty) handleUpdate(item.id, { quantity: parseInt(newQty) })
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
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
    </div>
  )
}
