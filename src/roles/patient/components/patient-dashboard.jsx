import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, FileText, CalendarDays, Pill, ArrowRight, AlertTriangle, Stethoscope } from 'lucide-react'

function getDaysUntilExpiry(expiresAt) {
  if (!expiresAt) return null
  const now = new Date()
  const expiry = new Date(expiresAt)
  return Math.ceil((expiry - now) / (1000 * 60 * 60 * 24))
}

export function PatientDashboard({ profile, prescriptions = [], scheduleStats = null }) {
  // Calculate refill alerts
  const refillAlerts = prescriptions
    .filter(p => p.status === 'active')
    .map(p => ({
      ...p,
      daysLeft: getDaysUntilExpiry(p.expires_at)
    }))
    .filter(p => p.daysLeft !== null && p.daysLeft <= 7 && p.daysLeft >= 0)
    .sort((a, b) => a.daysLeft - b.daysLeft)

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

      {/* Refill Alerts */}
      {refillAlerts.length > 0 && (
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
              <AlertTriangle className="h-5 w-5" />
              Refill Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {refillAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-2 bg-white/50 dark:bg-background/50 rounded">
                  <div className="flex items-center gap-2">
                    <Pill className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium">
                      {alert.medicines?.[0]?.name || alert.medicines?.name || 'Medicine'}
                    </span>
                  </div>
                  <Badge className="bg-red-100 text-red-800">
                    {alert.daysLeft === 0 ? 'Expires today!' : `${alert.daysLeft} days left`}
                  </Badge>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-700 dark:text-red-300 mt-2">
              Contact your doctor to renew these prescriptions before they expire.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <CalendarDays className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">My Schedule</CardTitle>
            <CardDescription>
              Track your daily doses and medication schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            {scheduleStats ? (
              <div className="mb-3">
                <p className="text-sm font-medium">{scheduleStats.taken}/{scheduleStats.total} doses today</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${scheduleStats.percent}%` }}
                  />
                </div>
              </div>
            ) : null}
            <Button asChild variant="outline">
              <Link to="/dashboard/schedule">
                View schedule
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
            <CardTitle className="text-lg">My Doctors</CardTitle>
            <CardDescription>
              Connect with doctors to receive prescriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/my-doctors">
                View doctors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
