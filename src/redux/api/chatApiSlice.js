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
  }),
});

export const { useGetChatsByUserIdQuery } = chatApi;
