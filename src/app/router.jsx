import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAuth } from "@/context/AuthContext.jsx";
import RequireRole from "@/guards/RequireRole.jsx";
import { normalizeRole } from "@/shared/lib/utils/roles";
import LoadingFallback from "@/shared/components/common/LoadingFallback.jsx";

// --- Eager imports ---
import HomePage from "@/shared/pages/HomePage.jsx";

// --- Lazy imports ---
const Login = lazy(() => import("@/auth/pages/LoginPage.jsx"));
const SignUp = lazy(() => import("@/auth/pages/SignUpPage.jsx"));
const UnauthorizedPage = lazy(() => import("@/shared/pages/UnauthorizedPage.jsx"));
const DashboardLayout = lazy(() => import("@/shared/components/layout/DashboardLayout.jsx"));
const DashboardHomePage = lazy(() => import("@/shared/pages/DashboardHomePage.jsx"));
const PrescriptionsPage = lazy(() => import("@/shared/pages/PrescriptionsPage.jsx"));
const SearchPage = lazy(() => import("@/shared/pages/SearchPage.jsx"));
const SettingsPage = lazy(() => import("@/shared/pages/SettingsPage.jsx"));

// Doctor
const NewPrescriptionPage = lazy(() => import("@/roles/doctor/pages/NewPrescriptionPage.jsx"));
const DoctorsPage = lazy(() => import("@/roles/doctor/pages/DoctorsPage.jsx"));
const PatientsPage = lazy(() => import("@/roles/doctor/pages/PatientsPage.jsx"));
const PharmaciesPage = lazy(() => import("@/roles/doctor/pages/PharmaciesPage.jsx"));
const ConnectionsPage = lazy(() => import("@/roles/doctor/pages/ConnectionsPage.jsx"));

// Patient
const MyDoctorsPage = lazy(() => import("@/roles/patient/pages/MyDoctorsPage.jsx"));
const SchedulePage = lazy(() => import("@/roles/patient/pages/SchedulePage.jsx"));

// Pharmacy
const InventoryPage = lazy(() => import("@/roles/pharmacy/pages/InventoryPage.jsx"));
const MedicinesPage = lazy(() => import("@/roles/pharmacy/pages/MedicinesPage.jsx"));
const OrdersPage = lazy(() => import("@/roles/pharmacy/pages/OrdersPage.jsx"));

// Admin
const UsersPage = lazy(() => import("@/roles/admin/pages/UsersPage.jsx"));
const VerificationsPage = lazy(() => import("@/roles/admin/pages/VerificationsPage.jsx"));

function RoleRedirect() {
  const { loading, user, profile } = useAuth();

  if (loading) return <LoadingFallback />;

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const role = normalizeRole(profile?.role);

  if (["doctor", "patient", "pharmacy", "admin"].includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/unauthorized" replace />;
}

const router = createBrowserRouter([
  // Public pages
  { path: "/", element: <HomePage /> },

  {
    path: "/auth/login",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },

  {
    path: "/auth/sign-up",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <SignUp />
      </Suspense>
    ),
  },

  {
    path: "/unauthorized",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <UnauthorizedPage />
      </Suspense>
    ),
  },

  // Dashboard
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <RequireRole allow={["doctor", "patient", "pharmacy", "admin"]}>
          <DashboardLayout />
        </RequireRole>
      </Suspense>
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

      {
        path: "verifications",
        element: (
          <RequireRole allow={["admin"]}>
            <Suspense fallback={<LoadingFallback />}>
              <VerificationsPage />
            </Suspense>
          </RequireRole>
        ),
      },
    ],
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;