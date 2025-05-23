import { useEffect } from "react";

import appwriteClient from "@/services/appWrite";

// channel of the realtime subscription -> messages collection
const channel = `databases.${import.meta.env.VITE_APPWRITE_CHATDB_ID}.collections.${import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID}.documents`;

const useRealtimeMessages = (chatId, onNewMessage) => {
  useEffect(() => {
    if (!chatId) return;

    const unsubscribe = appwriteClient.subscribe(channel, (response) => {
      console.log("📡 Realtime response:", response); // <== add this
      if (response.events.some((event) => event.endsWith(".create"))) {
        const newMsg = response.payload;
        console.log("newMsg: ", newMsg);
        if (newMsg.chatId === chatId) {
          console.log("onNewMessage is called: ", newMsg.chatId, " ", chatId);
          onNewMessage(newMsg);
          console.log("yes newMessage is detected");
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [chatId, onNewMessage]);
};

export default useRealtimeMessages;
