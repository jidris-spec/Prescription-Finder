import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '@/src/components/ProtectedRoute'

import HomePage from '@/src/pages/HomePage'
import LoginPage from '@/src/pages/auth/LoginPage'
import SignUpPage from '@/src/pages/auth/SignUpPage'
import SignUpSuccessPage from '@/src/pages/auth/SignUpSuccessPage'
import AuthErrorPage from '@/src/pages/auth/AuthErrorPage'
import AuthCallbackPage from '@/src/pages/auth/AuthCallbackPage'

import DashboardLayout from '@/src/pages/dashboard/DashboardLayout'
import DashboardHomePage from '@/src/pages/dashboard/DashboardHomePage'
import SearchPage from '@/src/pages/dashboard/SearchPage'
import PrescriptionsPage from '@/src/pages/dashboard/PrescriptionsPage'
import NewPrescriptionPage from '@/src/pages/dashboard/NewPrescriptionPage'
import PatientsPage from '@/src/pages/dashboard/PatientsPage'
import OrdersPage from '@/src/pages/dashboard/OrdersPage'
import InventoryPage from '@/src/pages/dashboard/InventoryPage'
import MedicinesPage from '@/src/pages/dashboard/MedicinesPage'
import UsersPage from '@/src/pages/dashboard/UsersPage'
import PharmaciesPage from '@/src/pages/dashboard/PharmaciesPage'
import DoctorsPage from '@/src/pages/dashboard/DoctorsPage'
import SettingsPage from '@/src/pages/dashboard/SettingsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/sign-up" element={<SignUpPage />} />
      <Route path="/auth/sign-up-success" element={<SignUpSuccessPage />} />
      <Route path="/auth/error" element={<AuthErrorPage />} />
      <Route path="/auth/callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          <Route path="prescriptions/new" element={<NewPrescriptionPage />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="medicines" element={<MedicinesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="pharmacies" element={<PharmaciesPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
