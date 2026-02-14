import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Pill, Building2, Stethoscope, ArrowRight, Shield, Activity } from 'lucide-react'

export function AdminDashboard({ profile, stats = {} }) {
  const { totalUsers = 0, totalMedicines = 0, totalPharmacies = 0, totalDoctors = 0 } = stats
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage users, medicines, and platform settings
        </p>
      </div>

      {/* Admin Notice */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Administrator Access</p>
              <p className="text-sm text-muted-foreground">
                You have full access to manage all platform data and users.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Users</CardTitle>
            <CardDescription>
              Manage all registered users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm">
              <Link to="/dashboard/users">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Pill className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Medicines</CardTitle>
            <CardDescription>
              Manage medicine database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard/medicines">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Pharmacies</CardTitle>
            <CardDescription>
              Verify and manage pharmacies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard/pharmacies">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Doctors</CardTitle>
            <CardDescription>
              Verify and manage doctors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard/doctors">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-3xl">{totalUsers}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Registered accounts</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Medicines</CardDescription>
            <CardTitle className="text-3xl">{totalMedicines}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">In database</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Pharmacies</CardDescription>
            <CardTitle className="text-3xl">{totalPharmacies}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Registered pharmacies</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Doctors</CardDescription>
            <CardTitle className="text-3xl">{totalDoctors}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Verified doctors</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No recent activity to display.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
