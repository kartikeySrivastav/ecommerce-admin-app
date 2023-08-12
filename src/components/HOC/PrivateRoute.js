import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token || !auth.authenticate) {
      navigate("/signin", { replace: true });
    }
  }, [token, auth.authenticate]);

  if (token && auth.authenticate) {
    return <Outlet />;
  } else {
    return null;
  }
};

export default PrivateRoutes;
