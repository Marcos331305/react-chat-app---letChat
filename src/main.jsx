import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-chat-elements/dist/main.css";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

import appRoutes from "@/routes/appRoutes.jsx";
import { store } from "@/redux/store.js";

// Main app's entry point
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
      <Toaster position="top-center" />
    </Provider>
  </StrictMode>,
);
