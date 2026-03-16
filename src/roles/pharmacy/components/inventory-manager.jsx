<<<<<<< Updated upstream
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { updateInventoryItem, deleteInventoryItem } from "@/shared/lib/firebase/db"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

import { Package, AlertCircle, Pencil, Trash2, Check, X } from "lucide-react"

import AddInventoryDialog from "./AddInventoryDialog"
=======
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addInventoryItem, updateInventoryItem, deleteInventoryItem } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Package, AlertCircle, Loader2, Pencil, Trash2, ChevronsUpDown, Check } from 'lucide-react'
import { cn } from '@/shared/lib/utils/cn'

function MedicineCombobox({ medicines, value, onChange }) {
  const [open, setOpen] = useState(false)
  const selected = medicines.find((m) => m.id === value)

  return (
    <Popover open={open} onOpenChange={setOpen} modal={false}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {selected
            ? `${selected.name || selected.brand_name}${selected.strength ? ` (${selected.strength})` : ''}`
            : 'Select medicine'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: 'var(--radix-popover-trigger-width)' }} align="start">
        <Command>
          <CommandInput placeholder="Search medicine..." />
          <CommandList>
            <CommandEmpty>No medicine found.</CommandEmpty>
            <CommandGroup>
              {medicines.map((m) => (
                <CommandItem
                  key={m.id}
                  value={`${m.name || m.brand_name || ''} ${m.strength || ''}`}
                  onSelect={() => {
                    onChange(m.id)
                    setOpen(false)
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === m.id ? 'opacity-100' : 'opacity-0')} />
                  {m.name || m.brand_name}
                  {m.strength && <span className="ml-1 text-muted-foreground">({m.strength})</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
>>>>>>> Stashed changes

export function InventoryManager({ pharmacy, inventory, medicines, onRefresh }) {
  const navigate = useNavigate()

  const [editingId, setEditingId] = useState(null)
  const [editQty, setEditQty] = useState("")
  const [deletingId, setDeletingId] = useState(null)

  if (!pharmacy) {
    return (
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="py-8 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Pharmacy Not Setup</h3>
          <p className="text-muted-foreground mb-4">
            You need to register your pharmacy before managing inventory.
          </p>
          <Button onClick={() => navigate("/dashboard/settings")}>
            Setup Pharmacy
          </Button>
        </CardContent>
      </Card>
    )
  }

  const handleUpdate = async (id, updates) => {
    try {
      await updateInventoryItem(id, updates)
      onRefresh?.()
    } catch (error) {
      console.error("Error updating inventory:", error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteInventoryItem(id)
      setDeletingId(null)
      onRefresh?.()
    } catch (error) {
      console.error("Error deleting inventory:", error)
    }
  }

  const handleSaveEdit = async (id) => {
    if (!editQty) return
    await handleUpdate(id, { quantity: parseInt(editQty) })
    setEditingId(null)
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {inventory.length} items in inventory
        </div>
<<<<<<< Updated upstream

        <AddInventoryDialog
          pharmacy={pharmacy}
          medicines={medicines}
          inventory={inventory}
          onRefresh={onRefresh}
        />
=======
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
              {medicines.length === 0 && (
                <div className="p-3 text-sm rounded-md bg-orange-100 text-orange-800 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    No medicines in the catalog yet.{' '}
                    <button
                      className="underline font-medium"
                      onClick={() => { setIsAddOpen(false); navigate('/dashboard/medicines') }}
                    >
                      Go to Medicines
                    </button>{' '}
                    to add medicines first, then come back to add them to inventory.
                  </span>
                </div>
              )}
              <div className="space-y-2">
                <Label>Medicine</Label>
                <MedicineCombobox
                  medicines={availableMedicines}
                  value={medicineId}
                  onChange={setMedicineId}
                />
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
>>>>>>> Stashed changes
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

                  {/* Medicine */}
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {item.medicines?.name ||
                          item.medicines?.brand_name ||
                          "Unknown"}
                      </p>

                      {item.medicines?.strength && (
                        <p className="text-sm text-muted-foreground">
                          {item.medicines.strength}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  {/* Quantity */}
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        type="number"
                        className="w-20 h-7 text-sm"
                        value={editQty}
                        onChange={(e) => setEditQty(e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <Badge
                        variant={
                          item.quantity < 10 ? "destructive" : "secondary"
                        }
                      >
                        {item.quantity}
                      </Badge>
                    )}
                  </TableCell>

                  {/* Price */}
                  <TableCell>
                    ${item.price?.toFixed(2) ?? "0.00"}
                  </TableCell>

                  {/* Batch */}
                  <TableCell>{item.batch_number || "-"}</TableCell>

                  {/* Expiry */}
                  <TableCell>
                    {item.expiry_date
                      ? new Date(item.expiry_date).toLocaleDateString()
                      : "-"}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">

                      {editingId === item.id ? (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleSaveEdit(item.id)}
                          >
                            <Check className="h-4 w-4 text-green-600" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingId(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : deletingId === item.id ? (
                        <>
                          <span className="text-sm text-muted-foreground self-center">
                            Delete?
                          </span>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Check className="h-4 w-4 text-destructive" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeletingId(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingId(item.id)
                              setEditQty(String(item.quantity))
                            }}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeletingId(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </>
                      )}

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
