import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  {
    id: "1",
    username: "john_doe",
    lastMessage: "Hey! How's it going?",
  },
  {
    id: "2",
    username: "jane_smith",
    lastMessage: "Let's catch up soon!",
  },
  {
    id: "3",
    username: "john_doe",
    lastMessage: "Hey! How's it going?",
  },
  {
    id: "4",
    username: "jane_smith",
    lastMessage: "Let's catch up soon!",
  },
  {
    id: "5",
    username: "john_doe",
    lastMessage: "Hey! How's it going?",
  },
  {
    id: "6",
    username: "jane_smith",
    lastMessage: "Let's catch up soon!",
  },
  {
    id: "7",
    username: "john_doe",
    lastMessage: "Hey! How's it going?",
  },
  {
    id: "8",
    username: "jane_smith",
    lastMessage: "Let's catch up soon!",
  },
  // Add more mock or real data here
];

const ChatList = () => {
  return (
    <div className="w-full max-w-md mx-auto px-4 grow overflow-y-auto">
      <ScrollArea className="h-full w-full">
        <ul className="divide-y">
          {conversations.length > 0 ? (
            conversations.map((chat) => (
              <li
                key={chat.id}
                className="p-4 hover:bg-muted cursor-pointer transition"
              >
                <p className="font-medium text-sm">{chat.username}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {chat.last}
                </p>
              </li>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No chat's yet. Search to start chatting.
            </div>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ChatList;
