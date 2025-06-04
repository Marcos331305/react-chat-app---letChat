import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Databases, Query, ID } from "appwrite";

import appwriteClient from "@/services/appWrite";
import { setMessages, updateMessageStatus } from "../slices/messageSlice";

const databases = new Databases(appwriteClient);

export const msgApi = createApi({
  reducerPath: "msgApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getMessagesByChatId: builder.query({
      async queryFn(chatId, { dispatch }) {
        try {
          const res = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_CHATDB_ID,
            import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID,
            [
              Query.equal("chatId", chatId),
              Query.orderAsc("createdAt"),
              Query.limit(30), // Optional: Limit messages
            ]
          );

          const fetchedMessages = res.documents;
          console.log("Fetched messages:", fetchedMessages);

          // Always replace the Redux messages with newly fetched ones
          dispatch(setMessages(fetchedMessages));

          return { data: res.documents };
        } catch (error) {
          console.log("Error fetching messages:", error.message);
          return { error: { message: error.message } };
        }
      },
    }),
    sendMessage: builder.mutation({
      async queryFn({ msgId, chatId, senderId, receiverId, msg }, {dispatch}) {
        try {
          const response = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_CHATDB_ID, // Database ID
            import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID, // Collection ID
            ID.unique(),
            {
              msgId,
              chatId,
              senderId,
              receiverId,
              msg,
              status: "sent", // msg Status :- Sent after DB success
            }
          );
          // after DB success, update the message status in UI(Redux)
          dispatch(
            updateMessageStatus({
              msgId: response.msgId,
              status: "sent",
            })
          );
          console.log("message sent successfully:", response);
          return { data: response };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", message: error.message } };
        }
      },
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesByChatIdQuery } = msgApi;
