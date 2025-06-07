import { setActiveChatId } from "@/redux/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Chat = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserId = useSelector((state) => state.auth.user.$id);
  // Determine if this is an existing chat (has userIds and userNames)
  const isExistingChat =
    Array.isArray(item?.userIDs) && Array.isArray(item?.userNames);
  // Get the other user's name if this is an existing chat
  const otherUserName = isExistingChat
    ? item.userNames[item.userIDs.findIndex((id) => id !== currentUserId)]
    : item?.username; // fallback to search result

  // for clicking on a chat/searchedUser while searching
  const handleChatClick = async (item) => {
    navigate("/letchat/c");
    // only set the chatId if the user is clicking on an existing chat
    if (item.chatId) dispatch(setActiveChatId(item.chatId));
  };

  return (
    <li
      onClick={() => handleChatClick(item)}
      className="p-4 hover:bg-muted cursor-pointer transition flex items-center gap-3 rounded-2xl"
    >
      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* Name & Last Message */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm w-full truncate">{otherUserName}</p>
        <p className="text-xs text-muted-foreground truncate w-full">
          {item.lastMsg}
        </p>
      </div>
      {/* Last Message Time & Unread Count */}
      <div className="text-right whitespace-nowrap">
        {/* <p className="text-[10px] text-gray-400">
          {new Date(item.lastMsgTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p> */}
        {item.unRead > 0 && (
          <span className="bg-primary text-white rounded-full px-2 py-0.5 text-xs">
            {item.unRead}
          </span>
        )}
      </div>
    </li>
  );
};

export default Chat;
