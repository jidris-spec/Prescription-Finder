import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import RequireRole from "@/guards/RequireRole.jsx";
import { normalizeRole } from "@/shared/lib/utils/roles";

import HomePage from "@/shared/pages/HomePage.jsx";
import UnauthorizedPage from "@/shared/pages/UnauthorizedPage.jsx";

// Auth
import Login from "@/auth/pages/LoginPage.jsx";
import SignUp from "@/auth/pages/SignUpPage.jsx";

// Dashboard shell + pages
import DashboardLayout from "@/shared/components/layout/DashboardLayout.jsx";
import DashboardHomePage from "@/shared/pages/DashboardHomePage.jsx";
import DoctorsPage from "@/roles/doctor/pages/DoctorsPage.jsx";
import PatientsPage from "@/roles/doctor/pages/PatientsPage.jsx";
import PharmaciesPage from "@/roles/doctor/pages/PharmaciesPage.jsx";
import PrescriptionsPage from "@/shared/pages/PrescriptionsPage.jsx";
import NewPrescriptionPage from "@/roles/doctor/pages/NewPrescriptionPage.jsx";
import InventoryPage from "@/roles/pharmacy/pages/InventoryPage.jsx";
import MedicinesPage from "@/roles/pharmacy/pages/MedicinesPage.jsx";
import SearchPage from "@/shared/pages/SearchPage.jsx";
import SettingsPage from "@/shared/pages/SettingsPage.jsx";
import UsersPage from "@/roles/admin/pages/UsersPage.jsx";
import MyDoctorsPage from "@/roles/patient/pages/MyDoctorsPage.jsx";
import ConnectionsPage from "@/roles/doctor/pages/ConnectionsPage.jsx";
import SchedulePage from "@/roles/patient/pages/SchedulePage.jsx";
import OrdersPage from "@/roles/pharmacy/pages/OrdersPage.jsx";

// Redirect user to the right dashboard based on role
function RoleRedirect() {
  const { loading, user, profile } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  const role = profile?.role;
  const r = normalizeRole(role)
  if (r === "doctor") return <Navigate to="/dashboard" replace />;
  if (r === "patient") return <Navigate to="/dashboard" replace />;
  if (r === "pharmacist") return <Navigate to="/dashboard" replace />;

  // If role is missing or unknown, send to dashboard so RequireRole
  // can show a helpful "Missing profile/role" message instead of
  // the generic Unauthorized page.
  return <Navigate to="/dashboard" replace />;
}

const router = createBrowserRouter([
  // Root
  { path: "/", element: <RoleRedirect /> },

  // Public pages
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/sign-up", element: <SignUp /> },
  { path: "/unauthorized", element: <UnauthorizedPage /> },

  // Dashboard (nested)
  {
    path: "/dashboard",
    element: (
      <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
        <DashboardLayout />
      </RequireRole>
    ),
    children: [
      { index: true, element: <DashboardHomePage /> },

      // Doctor-only
      {
        path: "new-prescription",
        element: (
          <RequireRole allow={["doctor"]}>
            <NewPrescriptionPage />
          </RequireRole>
        ),
      },
      {
        path: "doctors",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <DoctorsPage />
          </RequireRole>
        ),
      },
      {
        path: "patients",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <PatientsPage />
          </RequireRole>
        ),
      },
      {
        path: "pharmacies",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <PharmaciesPage />
          </RequireRole>
        ),
      },

      // Doctor + pharmacy
      {
        path: "prescriptions",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <PrescriptionsPage />
          </RequireRole>
        ),
      },

      // Pharmacy-only
      {
        path: "inventory",
        element: (
          <RequireRole allow={["pharmacy", "admin"]}>
            <InventoryPage />
          </RequireRole>
        ),
      },
      {
        path: "medicines",
        element: (
          <RequireRole allow={["pharmacy", "admin"]}>
            <MedicinesPage />
          </RequireRole>
        ),
      },

      // Patient-only
      {
        path: "my-doctors",
        element: (
          <RequireRole allow={["patient"]}>
            <MyDoctorsPage />
          </RequireRole>
        ),
      },

      // Patient-only: dose schedule
      {
        path: "schedule",
        element: (
          <RequireRole allow={["patient"]}>
            <SchedulePage />
          </RequireRole>
        ),
      },

      // Pharmacy-only: orders
      {
        path: "orders",
        element: (
          <RequireRole allow={["pharmacy"]}>
            <OrdersPage />
          </RequireRole>
        ),
      },

      // Doctor-only: connection requests
      {
        path: "connections",
        element: (
          <RequireRole allow={["doctor"]}>
            <ConnectionsPage />
          </RequireRole>
        ),
      },

      // Shared for all logged-in roles
      {
        path: "search",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <SearchPage />
          </RequireRole>
        ),
      },
      {
        path: "settings",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <SettingsPage />
          </RequireRole>
        ),
      },

      // Future: admin-only
      {
        path: "users",
        element: (
          <RequireRole allow={["admin"]}>
            <UsersPage />
          </RequireRole>
        ),
      },
    ],
  },

  // Catch-all
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
