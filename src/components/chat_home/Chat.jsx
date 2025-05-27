import { setActiveChatId } from "@/redux/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

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
      onClick={()=> handleChatClick(item)}
      className="p-4 hover:bg-muted cursor-pointer transition"
    >
      <p className="font-medium text-sm">{otherUserName}</p>
      {item?.lastMsg && (
        <p className="text-xs text-muted-foreground truncate">{item.lastMsg}</p>
      )}
    </li>
  );
};

export default Chat;
