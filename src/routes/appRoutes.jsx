import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";

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
        ],
      },
    ],
  },
]);

export default appRoutes;
