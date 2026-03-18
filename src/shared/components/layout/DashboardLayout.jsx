import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { DashboardNav } from "./dashboard-nav";
import LoadingFallback from "@/shared/components/common/LoadingFallback";

export default function DashboardLayout() {
  const { user, profile, loading } = useAuth();

  // Wait for profile to load so role-based pages render correctly on first visit.
  // Without this guard, DashboardHomePage sees profile=null and defaults to 'patient'.
  if (!user || loading || !profile) {
    return <LoadingFallback />;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav user={user} profile={profile} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
