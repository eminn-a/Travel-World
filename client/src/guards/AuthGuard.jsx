import { useContext } from "react";
import { UserContext } from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { isAdmin } = useContext(UserContext);

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthGuard;
