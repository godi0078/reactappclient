import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { checkIsAuth } from "../redux/features/auth/authSlice";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(checkIsAuth);

  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
