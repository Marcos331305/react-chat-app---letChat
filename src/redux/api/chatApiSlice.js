import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Databases, Query, ID } from "appwrite";

import appwriteClient from "@/services/appWrite";
import { setActiveChatId, setTargetUser } from "../slices/chatSlice";

const databases = new Databases(appwriteClient);

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery(),
  tatgTypes: ["Chat"],
  endpoints: (builder) => ({
    getChatsByUserId: builder.query({
      async queryFn(currentUserId) {
        try {
          const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID, // Collection ID
            [Query.contains("userIDs", [currentUserId])],
          );
          console.log(response.documents);
          return { data: response.documents };
        } catch (error) {
          console.error(error.message);
          return { error: error.message };
        }
      },
    }),
    searchUser: builder.query({
      async queryFn(
        { searchText, currentUserId },
        { dispatch },
        _queryApi,
        _extraOptions,
        _baseQuery,
      ) {
        try {
          const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID, // Collection ID
            [
              Query.startsWith("username", searchText),
              // optionally exclude current user
              Query.notEqual("userId", currentUserId),
            ],
          );
          dispatch(setTargetUser(response.documents[0]));
          console.log(response.documents);
          return { data: response.documents };
        } catch (err) {
          return { error: { status: "CUSTOM_ERROR", data: err.message } };
        }
      },
    }),
    getOrCreateChat: builder.mutation({
      async queryFn(
        { currentUserId, targetUserId, targetUserName, activeChatId },
        { dispatch },
      ) {
        console.log("getOrCreateChat called");
        console.log("currentUserId", currentUserId);
        console.log("targetUserId", targetUserId);
        const userIDs = [currentUserId, targetUserId].sort(); // ensure consistent order

        try {
          // Check if chat already exists
          const res = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID, // Collection ID
            [Query.equal("userIDs", userIDs)],
          );

          if (res.total > 0) {
            const existingChatId = res.documents[0].id;
            return { data: existingChatId };
          }

          // If no existing chat, create one
          // Because activeChatId is deterministic based on current user and target user
          const newChatId = activeChatId;
          const newChat = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID, // Collection ID
            ID.unique(), // Document ID
            {
              chatId: newChatId, // actual chatId
              userIDs,
              createdAt: new Date().toISOString(),
              otherUserName: targetUserName,
            },
          );

          console.log(newChat);
        } catch (error) {
          console.log(error.message);
          return { error: error.message };
        }
      },
    }),
  }),
});

export const {
  useGetChatsByUserIdQuery,
  useLazySearchUserQuery,
  useGetOrCreateChatMutation,
} = chatApi;
