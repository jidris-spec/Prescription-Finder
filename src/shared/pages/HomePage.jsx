import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Pill, Search, FileText, Building2, Shield, ArrowRight, User, Stethoscope, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const DEMO_ACCOUNTS = [
  {
    role: 'Patient',
    email: 'patient@medfind.demo',
    password: 'demo1234',
    icon: User,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    border: 'border-blue-200 dark:border-blue-800',
    description: 'View prescriptions, track dose schedule, search medicines',
  },
  {
    role: 'Doctor',
    email: 'doctor@medfind.demo',
    password: 'demo1234',
    icon: Stethoscope,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/40',
    border: 'border-green-200 dark:border-green-800',
    description: 'Write prescriptions, manage connected patients',
  },
  {
    role: 'Pharmacist',
    email: 'pharmacy@medfind.demo',
    password: 'demo1234',
    icon: Building2,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    border: 'border-purple-200 dark:border-purple-800',
    description: 'Manage inventory, fulfill prescription orders',
  },
  {
    role: 'Admin',
    email: 'admin@medfind.demo',
    password: 'demo1234',
    icon: Shield,
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-950/40',
    border: 'border-orange-200 dark:border-orange-800',
    description: 'Verify doctors & pharmacies, manage users',
  },
]

function DemoCard({ account }) {
  const [copied, setCopied] = useState(false)
  const Icon = account.icon

  const copyCredentials = () => {
    navigator.clipboard.writeText(`${account.email}\n${account.password}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`rounded-xl border p-5 ${account.bg} ${account.border}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${account.color}`} />
          <span className={`font-semibold ${account.color}`}>{account.role}</span>
        </div>
        <button
          onClick={copyCredentials}
          className="text-muted-foreground hover:text-foreground transition-colors"
          title="Copy credentials"
        >
          {copied
            ? <Check className="h-4 w-4 text-green-500" />
            : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{account.description}</p>
      <div className="space-y-1 text-sm font-mono">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs">Email</span>
          <span className="text-foreground">{account.email}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs">Password</span>
          <span className="text-foreground">{account.password}</span>
        </div>
      </div>
      <Button size="sm" className="w-full mt-4" asChild>
        <Link to={`/auth/login?email=${encodeURIComponent(account.email)}`}>
          Sign in as {account.role}
          <ArrowRight className="ml-2 h-3 w-3" />
        </Link>
      </Button>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Pill className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MedFind</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth/login">Sign in</Link>
            </Button>
            <Button asChild>
              <Link to="/auth/sign-up">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Find Medicines. Manage Prescriptions. Stay Healthy.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            MedFind connects patients, doctors, and pharmacies to make medication management simple and efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth/sign-up">
                Create free account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/auth/login">Sign in to dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything you need for medication management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Medicine Search</CardTitle>
                <CardDescription>
                  Find medicines by name, brand, or category. Check availability at nearby pharmacies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Prescriptions</CardTitle>
                <CardDescription>
                  Doctors can write digital prescriptions. Patients can track and manage them easily.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Pharmacy Network</CardTitle>
                <CardDescription>
                  Pharmacies manage inventory and fulfill prescriptions through our platform.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure & Verified</CardTitle>
                <CardDescription>
                  All doctors and pharmacies are verified. Your health data is protected.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Access Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              Live Demo
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Try it out — no sign-up needed
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Use a pre-loaded demo account to explore each role. All accounts share the same password.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEMO_ACCOUNTS.map((account) => (
              <DemoCard key={account.role} account={account} />
            ))}
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Built for everyone in healthcare
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you are a patient looking for medication, a doctor writing prescriptions, or a pharmacist managing inventory.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>For Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Search for medicines and check prices</li>
                  <li>View prescriptions from your doctors</li>
                  <li>Find nearby pharmacies with stock</li>
                  <li>Track prescription history</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>For Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Write digital prescriptions</li>
                  <li>Search medicine database</li>
                  <li>Track patient prescriptions</li>
                  <li>Manage your practice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>For Pharmacists</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Manage medicine inventory</li>
                  <li>Receive and fulfill prescriptions</li>
                  <li>Update stock and pricing</li>
                  <li>Track sales and history</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>For Administrators</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Verify doctors and pharmacies</li>
                  <li>Manage medicine database</li>
                  <li>Monitor platform activity</li>
                  <li>Generate reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join MedFind today and simplify your medication management.
          </p>
          <Button size="lg" asChild>
            <Link to="/auth/sign-up">
              Create your free account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">MedFind</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Medication finder and prescription tracker
          </p>
        </div>
      </footer>
    </div>
  )
}
