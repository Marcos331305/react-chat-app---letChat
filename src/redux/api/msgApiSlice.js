import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Databases, Query, ID } from "appwrite";

import appwriteClient from "@/services/appWrite";

const databases = new Databases(appwriteClient);

export const msgApi = createApi({
  reducerPath: "msgApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      async queryFn({ chatId, senderId, receiverId, msg }) {
        try {
          const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID, // Collection ID
            ID.unique(),
            {
              chatId,
              senderId,
              receiverId,
              msg,
            },
          );
          return { data: response };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", message: error.message } };
        }
      },
    }),
  }),
});

export const { useSendMessageMutation } = msgApi;
