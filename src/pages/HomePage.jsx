import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Pill, Search, FileText, Building2, Shield, ArrowRight } from 'lucide-react'

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
