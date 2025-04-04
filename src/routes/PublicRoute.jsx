import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated === undefined) {
    return null; // Prevents brief flashes of unauthenticated routes
  }

  return isAuthenticated ? <Navigate to="/letchat" replace /> : <Outlet />;
};

export default PublicRoute;
