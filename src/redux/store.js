import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./slices/chatSlice";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import { authApi } from "./api/authApiSlice";
import { chatApi } from "./api/chatApiSlice";
import { msgApi } from "./api/msgApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    messages: messageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [msgApi.reducerPath]: msgApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware)
      .concat(msgApi.middleware),
});
