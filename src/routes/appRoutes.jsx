import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import VerifyEmail from "@/pages/VerifyEmail";
import ChatHome from "@/pages/ChatHome";
import ChatWindow from "@/pages/ChatWindow";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //  Private Routes (Only for authenticated users)
      {
        index: true,
        element: <Navigate to="/letchat" replace />,
      },
      {
        path: "letchat",
        element: <ProtectedRoute />, // Protect private routes
        children: [
          { index: true, element: <ChatHome /> },
          {
            path: "c/:id",
            element: <ChatWindow />,
          },
        ],
      },
    ],
  },
  //  Public Routes (Only for unauthenticated users)
  {
    path: "auth",
    element: <PublicRoute />, // Wrap auth routes inside PublicRoute
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "verify-email", element: <VerifyEmail /> },
    ],
  },
]);

export default appRoutes;
