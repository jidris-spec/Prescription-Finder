import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Pill, Loader2, User, Stethoscope, Building2, Shield } from 'lucide-react'

const roles = [
  { value: 'patient', label: 'Patient', description: 'Search medicines and manage prescriptions', icon: <User className="h-5 w-5" /> },
  { value: 'doctor', label: 'Doctor', description: 'Write prescriptions for patients', icon: <Stethoscope className="h-5 w-5" /> },
  { value: 'pharmacy', label: 'Pharmacist', description: 'Manage inventory and fill prescriptions', icon: <Building2 className="h-5 w-5" /> },
  { value: 'admin', label: 'Admin', description: 'Manage platform and verify users', icon: <Shield className="h-5 w-5" /> },
]

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('patient')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await signUp(email, password, {
      full_name: fullName,
      role: role,
      phone: phone || null,
    })

    if (error) {
      setError(error)
      setLoading(false)
      return
    }

    // With Firebase, user is logged in immediately after signup
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Pill className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Join MedFind to find medicines and manage prescriptions</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <div className="space-y-3">
              <Label>I am a...</Label>
              <RadioGroup value={role} onValueChange={(value) => setRole(value)} className="grid gap-3">
                {roles.map((r) => (
                  <Label
                    key={r.value}
                    htmlFor={r.value}
                    className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      role === r.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem value={r.value} id={r.value} className="sr-only" />
                    <div className={`p-2 rounded-full ${role === r.value ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {r.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{r.label}</div>
                      <div className="text-sm text-muted-foreground">{r.description}</div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
