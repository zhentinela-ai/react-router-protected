import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/landing" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
