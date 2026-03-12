import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAuth } from "@/context/AuthContext.jsx";
import RequireRole from "@/guards/RequireRole.jsx";
import { normalizeRole } from "@/shared/lib/utils/roles";
import LoadingFallback from "@/shared/components/common/LoadingFallback.jsx";

// --- Eager imports (critical path: public pages + layout shell) ---
import HomePage from "@/shared/pages/HomePage.jsx";
import Login from "@/auth/pages/LoginPage.jsx";
import UnauthorizedPage from "@/shared/pages/UnauthorizedPage.jsx";
import DashboardLayout from "@/shared/components/layout/DashboardLayout.jsx";

// --- Lazy imports (loaded on demand) ---
const SignUp              = lazy(() => import("@/auth/pages/SignUpPage.jsx"));
const DashboardHomePage   = lazy(() => import("@/shared/pages/DashboardHomePage.jsx"));
const PrescriptionsPage   = lazy(() => import("@/shared/pages/PrescriptionsPage.jsx"));
const SearchPage          = lazy(() => import("@/shared/pages/SearchPage.jsx"));
const SettingsPage        = lazy(() => import("@/shared/pages/SettingsPage.jsx"));

// Doctor
const NewPrescriptionPage = lazy(() => import("@/roles/doctor/pages/NewPrescriptionPage.jsx"));
const DoctorsPage         = lazy(() => import("@/roles/doctor/pages/DoctorsPage.jsx"));
const PatientsPage        = lazy(() => import("@/roles/doctor/pages/PatientsPage.jsx"));
const PharmaciesPage      = lazy(() => import("@/roles/doctor/pages/PharmaciesPage.jsx"));
const ConnectionsPage     = lazy(() => import("@/roles/doctor/pages/ConnectionsPage.jsx"));

// Patient
const MyDoctorsPage       = lazy(() => import("@/roles/patient/pages/MyDoctorsPage.jsx"));
const SchedulePage        = lazy(() => import("@/roles/patient/pages/SchedulePage.jsx"));

// Pharmacy
const InventoryPage       = lazy(() => import("@/roles/pharmacy/pages/InventoryPage.jsx"));
const MedicinesPage       = lazy(() => import("@/roles/pharmacy/pages/MedicinesPage.jsx"));
const OrdersPage          = lazy(() => import("@/roles/pharmacy/pages/OrdersPage.jsx"));

// Admin
const UsersPage           = lazy(() => import("@/roles/admin/pages/UsersPage.jsx"));

// Redirect user to the right dashboard based on role
function RoleRedirect() {
  const { loading, user, profile } = useAuth();

  if (loading) return <LoadingFallback />;
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
  // { path: "/", element: <RoleRedirect /> },

  // Public pages
  { path: "/", element: <HomePage /> },
  // { path: "/login", element: <Login /> },
  { path: "/auth/login", element: <Login /> },
  {
    path: "/auth/sign-up",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <SignUp />
      </Suspense>
    ),
  },
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
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DashboardHomePage />
          </Suspense>
        ),
      },

      // Doctor-only
      {
        path: "new-prescription",
        element: (
          <RequireRole allow={["doctor"]}>
            <Suspense fallback={<LoadingFallback />}>
              <NewPrescriptionPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "doctors",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <DoctorsPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "patients",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <PatientsPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "pharmacies",
        element: (
          <RequireRole allow={["doctor", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <PharmaciesPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Doctor + pharmacy
      {
        path: "prescriptions",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <PrescriptionsPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Pharmacy-only
      {
        path: "inventory",
        element: (
          <RequireRole allow={["pharmacy", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <InventoryPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "medicines",
        element: (
          <RequireRole allow={["pharmacy", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <MedicinesPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Patient-only
      {
        path: "my-doctors",
        element: (
          <RequireRole allow={["patient"]}>
            <Suspense fallback={<LoadingFallback />}>
              <MyDoctorsPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "schedule",
        element: (
          <RequireRole allow={["patient"]}>
            <Suspense fallback={<LoadingFallback />}>
              <SchedulePage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Pharmacy-only: orders
      {
        path: "orders",
        element: (
          <RequireRole allow={["pharmacy"]}>
            <Suspense fallback={<LoadingFallback />}>
              <OrdersPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Doctor-only: connection requests
      {
        path: "connections",
        element: (
          <RequireRole allow={["doctor"]}>
            <Suspense fallback={<LoadingFallback />}>
              <ConnectionsPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Shared for all logged-in roles
      {
        path: "search",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <SearchPage />
            </Suspense>
          </RequireRole>
        ),
      },
      {
        path: "settings",
        element: (
          <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <SettingsPage />
            </Suspense>
          </RequireRole>
        ),
      },

      // Admin-only
      {
        path: "users",
        element: (
          <RequireRole allow={["admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <UsersPage />
            </Suspense>
          </RequireRole>
        ),
      },
    ],
  },

  // Catch-all
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
