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
          return { data: response.documents };
        } catch (err) {
          return { error: { status: "CUSTOM_ERROR", data: err.message } };
        }
      },
    }),
    getOrCreateChat: builder.mutation({
      async queryFn(
        { currentUserId, targetUserId, targetUserName },
        { dispatch },
      ) {
        const userIDs = [currentUserId, targetUserId].sort(); // ensure consistent order

        try {
          // Check if chat already exists
          const res = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID, // Collection ID
            [Query.equal("userIDs", userIDs)],
          );

          if (res.total > 0) {
            const existingChat = res.documents[0];
            dispatch(setActiveChatId(existingChat)); // optional
            return { data: existingChat };
          }

          // If no existing chat, create one
          const newChat = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_CHATS_COLLECTION_ID, // Collection ID
            {
              id: ID.unique(),
              userIDs,
              createdAt: new Date().toISOString(),
              otherUserName: targetUserName,
            },
          );

          dispatch(setActiveChatId(newChat)); // optional
          console.log(newChat);
          return { data: newChat };
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
