import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./slices/chatSlice";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import { authApi } from "./api/authApiSlice";
import { chatApi } from "./api/chatApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    messages: messageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware),
});
