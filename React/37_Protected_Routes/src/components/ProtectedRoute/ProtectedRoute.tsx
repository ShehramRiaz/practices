import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext/AuthContext";

function ProtectedRoute() {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
