import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import { normalizeRole, isRoleAllowed } from "@/shared/lib/utils/roles";

export default function RequireRole({ allow = [], children }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  // Not logged in → send to login (later you can replace with /login page)
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  // Logged in but no profile yet → block
  if (!profile?.role) return <div>Missing profile/role</div>;

  // Wrong role → unauthorized
  if (!isRoleAllowed(profile.role, allow)) return <Navigate to="/unauthorized" replace />;

  return children;
}
