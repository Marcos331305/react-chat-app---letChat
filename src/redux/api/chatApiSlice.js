import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Databases, Query } from "appwrite";

import appwriteClient from "@/services/appWrite";

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
          return { data: response.documents };
        } catch (err) {
          return { error: { status: "CUSTOM_ERROR", data: err.message } };
        }
      },
    }),
  }),
});

export const { useGetChatsByUserIdQuery, useLazySearchUserQuery } = chatApi;
