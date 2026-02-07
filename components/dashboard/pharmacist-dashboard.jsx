import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, ClipboardList, Search, Plus, ArrowRight, AlertCircle, Building2 } from 'lucide-react'

export function PharmacistDashboard({ profile }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, {profile?.full_name?.split(' ')[0] || 'Pharmacist'}
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your pharmacy inventory and fulfill prescriptions
        </p>
      </div>

      {/* Setup Notice */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Setup Your Pharmacy</p>
              <p className="text-sm text-muted-foreground">
                Register your pharmacy details to start managing inventory and receiving orders.
              </p>
            </div>
            <Button size="sm" variant="outline" asChild className="ml-auto bg-transparent">
              <Link to="/dashboard/settings">Setup Pharmacy</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Inventory</CardTitle>
            <CardDescription>
              Manage your medicine stock and pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/dashboard/inventory">
                Manage inventory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Orders</CardTitle>
            <CardDescription>
              View and fulfill prescription orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/orders">
                View orders
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
              Browse available medicines to add to inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link to="/dashboard/search">
                Browse medicines
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
            <CardDescription>Total Items</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Medicines in stock</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Low Stock</CardDescription>
            <CardTitle className="text-3xl text-orange-500">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Items need restocking</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Pending Orders</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Waiting to be filled</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardDescription>Filled Today</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Prescriptions fulfilled</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No alerts at this time. Complete your pharmacy setup to start receiving orders.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
