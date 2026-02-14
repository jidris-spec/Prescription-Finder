import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { DashboardNav } from "./dashboard-nav";

export default function DashboardLayout() {
  const { user, profile } = useAuth();

  if (!user) {
    return <div className="p-8">Checking session…</div>;
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
