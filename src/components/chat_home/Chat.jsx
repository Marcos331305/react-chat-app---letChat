import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router";

import { useGetOrCreateChatMutation } from "@/redux/api/chatApiSlice";

const Chat = ({ item }) => {
  const navigate = useNavigate();
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const targetUserId = useSelector((state) => state.chat.targetUser?.userId);
  const targetUserName = useSelector(
    (state) => state.chat.targetUser?.otherUserName,
  );
  const [getOrCreateChat, { isLoading, error }] = useGetOrCreateChatMutation();

  // for clicking on a chat/searchedUser while searching
  const handleSearchSelect = async () => {
    navigate("/letchat/c");
    // const result = await getOrCreateChat({
    //   currentUserId,
    //   targetUserId,
    //   targetUserName,
    // });
    // if (result.data) navigate(`/c/${result.data.id}`);
    // else toast.error(result.error);
  };

  return (
    <li
      onClick={handleSearchSelect}
      className="p-4 hover:bg-muted cursor-pointer transition"
    >
      <p className="font-medium text-sm">
        {item?.otherUserName || item?.username}
      </p>
      {item?.lastMsg && (
        <p className="text-xs text-muted-foreground truncate">{item.lastMsg}</p>
      )}
    </li>
  );
};

export default Chat;
