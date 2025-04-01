import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import appRoutes from "@/routes/appRoutes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>,
);
