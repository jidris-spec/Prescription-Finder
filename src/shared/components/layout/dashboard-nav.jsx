import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Pill,
  Search,
  FileText,
  Package,
  Users,
  Settings,
  LogOut,
  User,
  Stethoscope,
  Building2,
  Shield,
  LayoutDashboard,
  ClipboardList,
  Sun,
  Moon,
  BadgeCheck,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils/cn'

const roleIcons = {
  patient: User,
  doctor: Stethoscope,
  pharmacist: Building2,
  admin: Shield,
}

const roleLabels = {
  patient: 'Patient',
  doctor: 'Doctor',
  pharmacist: 'Pharmacist',
  admin: 'Administrator',
}

const navItemsByRole = {
  patient: [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/schedule', label: 'Schedule', icon: ClipboardList },
    { href: '/dashboard/prescriptions', label: 'Prescriptions', icon: FileText },
    { href: '/dashboard/search', label: 'Find Medicines', icon: Search },
  ],
  doctor: [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/new-prescription', label: 'New Prescription', icon: FileText },
    { href: '/dashboard/connections', label: 'Requests', icon: ClipboardList },
    { href: '/dashboard/prescriptions', label: 'Prescriptions', icon: Pill },
    { href: '/dashboard/patients', label: 'Patients', icon: Users },
    { href: '/dashboard/search', label: 'Medicines', icon: Search },
  ],
  pharmacist: [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/medicines', label: 'Medicine DB', icon: Pill },
    { href: '/dashboard/inventory', label: 'Inventory', icon: Package },
    { href: '/dashboard/orders', label: 'Orders', icon: ClipboardList },
    { href: '/dashboard/search', label: 'Search', icon: Search },
  ],
  admin: [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/users', label: 'Users', icon: Users },
    { href: '/dashboard/verifications', label: 'Verifications', icon: BadgeCheck },
    { href: '/dashboard/medicines', label: 'Medicines', icon: Pill },
    { href: '/dashboard/pharmacies', label: 'Pharmacies', icon: Building2 },
    { href: '/dashboard/doctors', label: 'Doctors', icon: Stethoscope },
  ],
}

export function DashboardNav({ user, profile }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { theme, setTheme } = useTheme()
  const role = profile?.role || 'patient'
  const RoleIcon = roleIcons[role]
  const navItems = navItemsByRole[role]

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Pill className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MedFind</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href ||
                (item.href !== '/dashboard' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                aria-label={`User menu for ${profile?.full_name || user?.email}`}
              >
                <div className="p-1.5 bg-primary/10 rounded-full" aria-hidden="true">
                  <RoleIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="hidden sm:inline text-sm">
                  {profile?.full_name || user.email}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{profile?.full_name || 'User'}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {roleLabels[role]}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-1 pb-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
