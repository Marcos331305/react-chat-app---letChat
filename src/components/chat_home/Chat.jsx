import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router";

import { useGetOrCreateChatMutation } from "@/redux/api/chatApiSlice";

const Chat = ({ item }) => {
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
  const handleSearchSelect = async () => {
    navigate("/letchat/c");
  };

  return (
    <li
      onClick={handleSearchSelect}
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
