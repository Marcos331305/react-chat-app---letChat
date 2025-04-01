import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";

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
          { path: "signup", element: <SignUp /> },
          { path: "login", element: <Login /> },
        ],
      },
    ],
  },
]);

export default appRoutes;
