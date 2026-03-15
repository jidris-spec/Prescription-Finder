import { useState } from 'react'
import { updateEmail } from 'firebase/auth'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import { updateProfile, createDoctor, updateDoctor, createPharmacy, updatePharmacy } from '@/shared/lib/firebase/db'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Loader2, User, Stethoscope, Building2, Sun, Moon } from 'lucide-react'

export function SettingsForm({ profile, doctorInfo, pharmacyInfo, onRefresh }) {
  const { refreshProfile, user } = useAuth()
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(false)

  // Profile state
  const [email, setEmail] = useState(user?.email || '')
  const [fullName, setFullName] = useState(profile?.full_name || '')
  const [phone, setPhone] = useState(profile?.phone || '')
  const [address, setAddress] = useState(profile?.address || '')

  // Doctor state
  const [licenseNumber, setLicenseNumber] = useState(doctorInfo?.license_number || '')
  const [specialization, setSpecialization] = useState(doctorInfo?.specialization || '')
  const [hospitalAffiliation, setHospitalAffiliation] = useState(doctorInfo?.hospital_affiliation || '')

  // Pharmacy state
  const [pharmacyName, setPharmacyName] = useState(pharmacyInfo?.name || '')
  const [pharmacyLicense, setPharmacyLicense] = useState(pharmacyInfo?.license_number || '')
  const [pharmacyAddress, setPharmacyAddress] = useState(pharmacyInfo?.address || '')
  const [pharmacyPhone, setPharmacyPhone] = useState(pharmacyInfo?.phone || '')
  const [pharmacyEmail, setPharmacyEmail] = useState(pharmacyInfo?.email || '')
  const [operatingHours, setOperatingHours] = useState(pharmacyInfo?.operating_hours || '')

  const handleSaveProfile = async () => {
    if (!profile || !user) return

    setLoading(true)
    try {
      if (email && email !== user.email) {
        await updateEmail(user, email)
      }

      await updateProfile(user.uid, {
        full_name: fullName,
        phone: phone || null,
        address: address || null,
      })

      toast.success('Profile saved successfully')
      refreshProfile()
    } catch (err) {
      console.error('Error saving profile:', err)
      if (err.code === 'auth/requires-recent-login') {
        toast.error('Please log out and log back in before changing your email.')
      } else {
        toast.error(err.message || 'Failed to save profile')
      }
    }
    setLoading(false)
  }

  const handleSaveDoctor = async () => {
    if (!profile || !user) return

    setLoading(true)
    try {
      if (doctorInfo) {
        await updateDoctor(doctorInfo.id, {
          license_number: licenseNumber,
          specialization: specialization || null,
          hospital_affiliation: hospitalAffiliation || null,
        })
      } else {
        await createDoctor({
          user_id: user.uid,
          license_number: licenseNumber,
          specialization: specialization || null,
          hospital_affiliation: hospitalAffiliation || null,
        })
      }

      toast.success('Doctor information saved')
      if (onRefresh) onRefresh()
    } catch (error) {
      console.error('Error saving doctor info:', error)
      toast.error('Failed to save doctor information')
    }
    setLoading(false)
  }

  const handleSavePharmacy = async () => {
    if (!profile || !user) return

    setLoading(true)
    try {
      if (pharmacyInfo) {
        await updatePharmacy(pharmacyInfo.id, {
          name: pharmacyName,
          license_number: pharmacyLicense,
          address: pharmacyAddress,
          phone: pharmacyPhone,
          email: pharmacyEmail || null,
          operating_hours: operatingHours || null,
        })
      } else {
        await createPharmacy({
          user_id: user.uid,
          name: pharmacyName,
          license_number: pharmacyLicense,
          address: pharmacyAddress,
          phone: pharmacyPhone,
          email: pharmacyEmail || null,
          operating_hours: operatingHours || null,
        })
      }

      toast.success('Pharmacy information saved')
      if (onRefresh) onRefresh()
    } catch (err) {
      console.error('Error saving pharmacy info:', err)
      toast.error('Failed to save pharmacy info: ' + (err?.message || 'Unknown error'))
    }
    setLoading(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Appearance Settings */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sun className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how MedFind looks for you</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <div>
                <Label className="text-sm font-medium">Dark Mode</Label>
                <p className="text-xs text-muted-foreground">Toggle between light and dark theme</p>
              </div>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              aria-label="Toggle dark mode"
            />
          </div>
        </CardContent>
      </Card>

      {/* Profile Settings */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
              rows={2}
            />
          </div>
          <Button onClick={handleSaveProfile} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Profile'}
          </Button>
        </CardContent>
      </Card>

      {/* Doctor Settings */}
      {profile?.role === 'doctor' && (
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Stethoscope className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>Doctor Information</CardTitle>
                <CardDescription>Complete your doctor profile to write prescriptions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>License Number *</Label>
              <Input
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                placeholder="Medical license number"
              />
            </div>
            <div className="space-y-2">
              <Label>Specialization</Label>
              <Input
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="e.g., General Medicine, Cardiology"
              />
            </div>
            <div className="space-y-2">
              <Label>Hospital Affiliation</Label>
              <Input
                value={hospitalAffiliation}
                onChange={(e) => setHospitalAffiliation(e.target.value)}
                placeholder="Hospital or clinic name"
              />
            </div>
            <Button onClick={handleSaveDoctor} disabled={loading || !licenseNumber}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Doctor Info'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Pharmacy Settings */}
      {(profile?.role === 'pharmacist' || profile?.role === 'pharmacy') && (
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>Pharmacy Information</CardTitle>
                <CardDescription>Register your pharmacy to manage inventory</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Pharmacy Name *</Label>
              <Input
                value={pharmacyName}
                onChange={(e) => setPharmacyName(e.target.value)}
                placeholder="Pharmacy name"
              />
            </div>
            <div className="space-y-2">
              <Label>License Number *</Label>
              <Input
                value={pharmacyLicense}
                onChange={(e) => setPharmacyLicense(e.target.value)}
                placeholder="Pharmacy license number"
              />
            </div>
            <div className="space-y-2">
              <Label>Address *</Label>
              <Textarea
                value={pharmacyAddress}
                onChange={(e) => setPharmacyAddress(e.target.value)}
                placeholder="Pharmacy address"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  value={pharmacyPhone}
                  onChange={(e) => setPharmacyPhone(e.target.value)}
                  placeholder="Phone number"
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={pharmacyEmail}
                  onChange={(e) => setPharmacyEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Operating Hours</Label>
              <Input
                value={operatingHours}
                onChange={(e) => setOperatingHours(e.target.value)}
                placeholder="e.g., Mon-Fri 9AM-6PM"
              />
            </div>
            <Button
              onClick={handleSavePharmacy}
              disabled={loading || !pharmacyName || !pharmacyLicense || !pharmacyAddress || !pharmacyPhone}
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Pharmacy Info'}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
