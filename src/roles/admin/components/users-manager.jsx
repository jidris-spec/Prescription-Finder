import { useState } from 'react'
import { updateProfile } from '@/shared/lib/firebase/db'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, User, Users } from 'lucide-react'

const roleColors = {
  patient: 'bg-blue-100 text-blue-800',
  doctor: 'bg-green-100 text-green-800',
  pharmacist: 'bg-purple-100 text-purple-800',
  admin: 'bg-red-100 text-red-800',
}

export function UsersManager({ users, onRefresh }) {

  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
    const matchesRole = roleFilter === 'all' || u.role === roleFilter
    return matchesSearch && matchesRole
  })

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateProfile(userId, { role: newRole })
      if (onRefresh) {
        await onRefresh()
      }
    } catch (error) {
      console.error('Error updating user role:', error)
    }
  }

  const roleCounts = {
    all: users.length,
    patient: users.filter(u => u.role === 'patient').length,
    doctor: users.filter(u => u.role === 'doctor').length,
    pharmacist: users.filter(u => u.role === 'pharmacist').length,
    admin: users.filter(u => u.role === 'admin').length,
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles ({roleCounts.all})</SelectItem>
            <SelectItem value="patient">Patients ({roleCounts.patient})</SelectItem>
            <SelectItem value="doctor">Doctors ({roleCounts.doctor})</SelectItem>
            <SelectItem value="pharmacist">Pharmacists ({roleCounts.pharmacist})</SelectItem>
            <SelectItem value="admin">Admins ({roleCounts.admin})</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Users Table */}
      {filteredUsers.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {search || roleFilter !== 'all' 
                ? 'No users found matching your filters' 
                : 'No users registered yet'
              }
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-full">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{user.full_name || 'Unnamed User'}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>
                    <Badge className={roleColors[user.role]}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.phone || '-'}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(user.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Select 
                      value={user.role} 
                      onValueChange={(value) => handleRoleChange(user.id, value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patient">Patient</SelectItem>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="pharmacist">Pharmacist</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
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