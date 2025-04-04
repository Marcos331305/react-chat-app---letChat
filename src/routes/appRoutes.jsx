import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import VerifyEmailPage from "@/pages/VerifyEmailPage";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Redirect root to signup (for new users)
      { index: true, element: <Navigate to="/auth/signup" replace /> },

      //  Public Routes (Only for unauthenticated users)
      {
        path: "auth",
        element: <PublicRoute />, // Wrap auth routes inside PublicRoute
        children: [
          { path: "signup", element: <SignUpPage /> },
          { path: "login", element: <LoginPage /> },
          { path: "verify-email", element: <VerifyEmailPage /> },
        ],
      },

      //  Private Routes (Only for authenticated users)
      {
        path: "letchat",
        element: <ProtectedRoute />, // Protect private routes
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);

export default appRoutes;
