import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import VerifyEmailPage from "@/pages/VerifyEmailPage";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      {
        index: true,
        element: <Navigate to="/auth/signup" replace />,
      },
      {
        path: "auth",
        children: [
          { path: "signup", element: <SignUpPage /> },
          { path: "login", element: <LoginPage /> },
          { path: "verify-email", element: <VerifyEmailPage /> },
        ],
      },
      // Private Routes
      {
        path: "letchat",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);

export default appRoutes;
