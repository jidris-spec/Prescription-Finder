import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Users, Search, Plus, ArrowRight, AlertCircle } from 'lucide-react'

export function DoctorDashboard({ profile }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, Dr. {profile?.full_name?.split(' ').slice(-1)[0] || 'Doctor'}
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage patients and write prescriptions
        </p>
      </div>

      {/* Verification Notice */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Complete Your Profile</p>
              <p className="text-sm text-muted-foreground">
                Add your license number and specialization to get verified and start writing prescriptions.
              </p>
            </div>
            <Button size="sm" variant="outline" asChild className="ml-auto bg-transparent">
              <Link to="/dashboard/settings">Complete Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Write Prescription</CardTitle>
            <CardDescription>
              Create a new prescription for your patient
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/dashboard/prescriptions/new">
                New prescription
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">My Prescriptions</CardTitle>
            <CardDescription>
              View all prescriptions you have written
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/prescriptions">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Medicine Database</CardTitle>
            <CardDescription>
              Search medicines and check interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/search">
                Search medicines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Total Prescriptions</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Prescriptions written this month</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Active Prescriptions</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Currently active prescriptions</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Patients</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Unique patients this month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
