import { useSelector } from "react-redux";

import { useGetChatsByUserIdQuery } from "@/redux/api/chatApiSlice";
import Chat from "./Chat";

const ChatList = ({ searchResults, isSearching }) => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const { data: chats, isLoading } = useGetChatsByUserIdQuery(currentUserId);
  const listToRender = isSearching ? searchResults : chats;

  return (
    <div className="w-full max-w-md mx-auto px-4 grow overflow-y-auto">
      <ul className="divide-y">
        {listToRender?.length > 0 ? (
          listToRender.map((item) => (
            <Chat item={item} key={item?.chatId || item?.userId} />
          ))
        ) : (
          <div className="p-4 text-center text-muted-foreground">
            {isSearching
              ? "User not found."
              : "No chat's yet. Search user to start chatting."}
          </div>
        )}
      </ul>
    </div>
  );
};

export default ChatList;
