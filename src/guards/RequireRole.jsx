import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import { normalizeRole, isRoleAllowed } from "@/shared/lib/utils/roles";
import LoadingFallback from "@/shared/components/common/LoadingFallback.jsx";

export default function RequireRole({ allow = [], children }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingFallback />;

  // Not logged in → send to login (later you can replace with /login page)
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  // Logged in but no profile yet → block
  if (!profile?.role) return (
    <div role="alert" className="p-8 text-center text-muted-foreground">
      Unable to load your profile. Please sign out and sign in again.
    </div>
  );

  // Wrong role → unauthorized
  if (!isRoleAllowed(profile.role, allow)) return <Navigate to="/unauthorized" replace />;

  return children;
}
