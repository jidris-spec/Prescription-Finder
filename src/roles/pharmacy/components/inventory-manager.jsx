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

        <AddInventoryDialog
          pharmacy={pharmacy}
          medicines={medicines}
          inventory={inventory}
          onRefresh={onRefresh}
        />
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
