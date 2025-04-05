import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import { useGetCurrentUserQuery } from "./redux/api/authApiSlice";

const App = () => {
  const { isLoading, isError } = useGetCurrentUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate("/auth/login", { replace: true });
    }
  }, [isError, navigate]);

  if (isLoading) return <div>Loading...</div>;

  return <AppLayout />;
};

export default App;
