import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, FileText, Clock, Pill, ArrowRight } from 'lucide-react'

export function PatientDashboard({ profile }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, {profile?.full_name?.split(' ')[0] || 'Patient'}
        </h1>
        <p className="text-muted-foreground mt-1">
          Search for medicines and manage your prescriptions
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Find Medicines</CardTitle>
            <CardDescription>
              Search for medicines and check availability at nearby pharmacies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/dashboard/search">
                Search now
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
              View and manage prescriptions from your doctors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/prescriptions">
                View prescriptions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>
              Track your prescription fills and medicine searches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-primary" />
            Health Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              Always take medicines as prescribed by your doctor
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              Check expiry dates before taking any medication
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              Store medicines in a cool, dry place away from direct sunlight
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">4.</span>
              Never share prescription medicines with others
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
