import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/components/ui/select"

export default function MedicineCombobox({ medicines, value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="mt-1">
        <SelectValue placeholder="Select a medicine..." />
      </SelectTrigger>
      <SelectContent>
        {medicines.map((m) => (
          <SelectItem key={m.id} value={m.id}>
            {m.name || m.brand_name}
            {m.strength ? ` — ${m.strength}` : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
