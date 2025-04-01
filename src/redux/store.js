import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import { authApi } from "./api/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
