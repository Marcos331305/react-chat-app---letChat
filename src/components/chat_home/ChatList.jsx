import { useSelector } from "react-redux";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetChatsByUserIdQuery } from "@/redux/api/chatApiSlice";

const ChatList = ({ searchResults, isSearching }) => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const { data: chats, isLoading } = useGetChatsByUserIdQuery(currentUserId);
  const listToRender = isSearching ? searchResults : chats;

  return (
    <div className="w-full max-w-md mx-auto px-4 grow overflow-y-auto">
      <ScrollArea className="h-full w-full">
        <ul className="divide-y">
          {listToRender?.length > 0 ? (
            listToRender.map((item) => (
              <li
                key={item?.id || item?.userId}
                className="p-4 hover:bg-muted cursor-pointer transition"
              >
                <p className="font-medium text-sm">
                  {item?.otherUserName || item?.username}
                </p>
                {item?.lastMsg && (
                  <p className="text-xs text-muted-foreground truncate">
                    {item.lastMsg}
                  </p>
                )}
              </li>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              {isSearching
                ? "User not found."
                : "No chat's yet. Search user to start chatting."}
            </div>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ChatList;
