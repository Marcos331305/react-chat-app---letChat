import { useState } from "react";

import ChatsHeader from "@/components/chat_home/chatsHeader";
import ChatList from "@/components/chat_home/chatList";
import { useLazySearchUserQuery } from "@/redux/api/chatApiSlice";

const ChatHome = () => {
  const [searchText, setSearchText] = useState("");
  const isSearching = searchText.trim().length >= 3;
  const [searchUser, { data: searchResults, isLoading, error }] =
    useLazySearchUserQuery();
  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      {/* Header (fixed height) */}
      <ChatsHeader
        searchUser={searchUser}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* Chat list grows to fill remaining height */}
      <ChatList
        searchResults={searchResults}
        isLoading={isLoading}
        isSearching={isSearching}
      />
    </div>
  );
};

export default ChatHome;
