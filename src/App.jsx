import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import { useGetCurrentUserQuery } from "./redux/api/authApiSlice";

const App = () => {
  const { isLoading, error } = useGetCurrentUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/auth/login", { replace: true });
    }
  }, [error, navigate]);

  if (isLoading) return <div>Loading...</div>;

  return <AppLayout />;
};

export default App;
