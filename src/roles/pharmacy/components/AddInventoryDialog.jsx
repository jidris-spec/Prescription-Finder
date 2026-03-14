import { useState } from "react"
import { addInventoryItem } from "@/shared/lib/firebase/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Loader2, Plus, AlertCircle } from "lucide-react"
import MedicineCombobox from "./MedicineCombobox"

const EMPTY_FORM = {
  medicineId: "",
  quantity: "",
  price: "",
  batchNumber: "",
  expiryDate: ""
}

export default function AddInventoryDialog({
  pharmacy,
  medicines,
  inventory,
  onRefresh
}) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  const availableMedicines = medicines.filter(
    (m) => !inventory.some((i) => i.medicine_id === m.id)
  )

  const handleAdd = async () => {
    if (!form.medicineId || !form.quantity || !form.price) return

    setLoading(true)

    await addInventoryItem({
      pharmacy_id: pharmacy.id,
      medicine_id: form.medicineId,
      quantity: parseInt(form.quantity),
      price: parseFloat(form.price),
      batch_number: form.batchNumber || null,
      expiry_date: form.expiryDate || null
    })

    setOpen(false)
    setForm(EMPTY_FORM)
    onRefresh?.()
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Medicine
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Medicine</DialogTitle>
          <DialogDescription>
            Add a medicine to your inventory
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div>
            <Label>Medicine</Label>
            <MedicineCombobox
              medicines={availableMedicines}
              value={form.medicineId}
              onChange={(v) => setForm((f) => ({ ...f, medicineId: v }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="number"
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) =>
                setForm((f) => ({ ...f, quantity: e.target.value }))
              }
            />
            <Input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm((f) => ({ ...f, price: e.target.value }))
              }
            />
            <Input
              placeholder="Batch number (optional)"
              value={form.batchNumber}
              onChange={(e) =>
                setForm((f) => ({ ...f, batchNumber: e.target.value }))
              }
            />
            <Input
              type="date"
              value={form.expiryDate}
              onChange={(e) =>
                setForm((f) => ({ ...f, expiryDate: e.target.value }))
              }
            />
          </div>

          <Button onClick={handleAdd} disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Add to Inventory"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
