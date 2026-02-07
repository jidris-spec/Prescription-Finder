import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/src/contexts/AuthContext'
import { Toaster } from '@/components/ui/sonner'
import { AppRoutes } from '@/src/router'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="medfind-theme">
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}
