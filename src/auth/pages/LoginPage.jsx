import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Pill, Loader2, User, Building2, Stethoscope, Shield } from 'lucide-react'

const QUICK_LOGIN = [
  { label: 'Patient',  email: 'patient@medfind.demo',  password: 'demo1234', icon: User },
  { label: 'Doctor',   email: 'doctor@medfind.demo',   password: 'demo1234', icon: Stethoscope },
  { label: 'Pharmacy', email: 'pharmacy@medfind.demo', password: 'demo1234', icon: Building2 },
  { label: 'Admin',    email: 'admin@medfind.demo',    password: 'demo1234', icon: Shield },
]

export default function LoginPage() {
  const [searchParams] = useSearchParams()
  const prefillEmail = searchParams.get('email') || ''

  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState(prefillEmail ? 'demo1234' : '')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [quickLoading, setQuickLoading] = useState(null)

  const { user, signIn, signOut } = useAuth()

  // Clear any existing session the moment the login page mounts.
  // This ensures the user always starts from a clean auth state,
  // which also flips GuestOnly's wasNullRef so it can redirect after
  // the next sign-in. Safe to call when already signed out (no-op).
  useEffect(() => {
    signOut()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await signIn(email, password)

    if (error) {
      setError(error)
      setLoading(false)
    }
    // Success: GuestOnly will redirect once user + profile are ready.
  }

  const handleQuickLogin = async (account) => {
    try {
      setQuickLoading(account.email)
      setError(null)

      console.log('[Login] handleQuickLogin → start | current uid:', user?.uid ?? 'null', '| target:', account.email)

      // 1. Sign out current user
      console.log('[Login] calling signOut...')
      await signOut()
      console.log('[Login] signOut done')

      // 2. Sign in as the new role.
      // GuestOnly will redirect to /dashboard once onAuthStateChanged fires
      // and getProfile resolves — no navigate() call needed here.
      console.log('[Login] calling signIn for', account.email)
      const { error } = await signIn(account.email, account.password)
      console.log('[Login] signIn returned | error:', error ?? 'none')

      if (error) {
        setError(error)
      }

    } catch (err) {
      console.error('[Login] quick login error:', err)
      setError('Failed to login')
    } finally {
      setQuickLoading(null)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-4">

        <p className="text-center text-sm text-muted-foreground">
          A real-time system that helps patients find available medicines from pharmacies.
        </p>

        {/* Demo login */}
        <div className="rounded-lg border bg-muted/40 px-5 py-4 space-y-3">
          <p className="text-sm font-semibold text-foreground">Test the system</p>

          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Login as <b>Patient</b> → create request</li>
            <li>Login as <b>Pharmacy</b> → claim request</li>
          </ol>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {QUICK_LOGIN.map((account) => {
              const Icon = account.icon
              const isLoading = quickLoading === account.email

              return (
                <Button
                  key={account.email}
                  variant="outline"
                  size="sm"
                  disabled={!!quickLoading || loading}
                  onClick={() => handleQuickLogin(account)}
                >
                  {isLoading
                    ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    : <Icon className="h-3.5 w-3.5" />}
                  Continue as {account.label}
                </Button>
              )
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            No signup required
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Pill className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>Sign in to your MedFind account</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">

              {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={loading || !!quickLoading}>
                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Don't have an account?{" "}
                <Link to="/auth/sign-up" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

      </div>
    </div>
  )
}