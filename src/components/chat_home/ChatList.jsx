import { useSelector } from "react-redux";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetChatsByUserIdQuery } from "@/redux/api/chatApiSlice";

const ChatList = () => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const { data: chats, isLoading } = useGetChatsByUserIdQuery(currentUserId);

  return (
    <div className="w-full max-w-md mx-auto px-4 grow overflow-y-auto">
      <ScrollArea className="h-full w-full">
        <ul className="divide-y">
          {chats?.length > 0 ? (
            chats?.map((chat) => (
              <li
                key={chat?.id}
                className="p-4 hover:bg-muted cursor-pointer transition"
              >
                <p className="font-medium text-sm">{chat?.otherUserName}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {chat.lastMsg}
                </p>
              </li>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No chat's yet. Search user to start chatting.
            </div>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ChatList;
