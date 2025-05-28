import { useDispatch, useSelector } from "react-redux";

import MsgBox from "../chat_Area/MsgBox";
import useRealTimeMessages from "../../hooks/useRealtimeMessages";
import useChatId from "../../hooks/useChatId";
import { addMessage } from "../../redux/slices/messageSlice";
import { useGetMessagesByChatIdQuery } from "../../redux/api/msgApiSlice";
import { useTargetUserFromStorage } from "@/hooks/useTargetUserFromStorage";

const ChatArea = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.user?.$id);
  const targetUserId = useSelector((state) => state.chat.targetUserId);
  const activeChatId = useSelector((state) => state.chat.activeChatId);
  const chatIdFromhook = useChatId(currentUserId, targetUserId);
  const chatId = activeChatId || chatIdFromhook;
  // for persisting the targetUserId and targetUserName on page reload with localStorage
  useTargetUserFromStorage(chatId);
  // fetch messages for the current chat from the API
  const { isLoading } = useGetMessagesByChatIdQuery(chatId,{
    skip: !chatId, // Skip if chatId is not available
    refetchOnMountOrArgChange: true, // Refetch when chatId changes
  });
  // Fetch messages for the current chat from the Redux store
  const messages = useSelector((state) => state.messages.messages);

  // Set up real-time message updates only for the targetedUser
  useRealTimeMessages(chatId, (newMsg) => {
    if (newMsg.senderId !== currentUserId) {
      dispatch(addMessage(newMsg));
    }
  });

  return (
    <div className="flex flex-col space-y-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : messages?.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center h-full">
          <div className="text-gray-500 text-center">No messages yet.</div>
          <div className="text-gray-500 text-center">
            Send message to start chat.
          </div>
        </div>
      ) : (
        messages?.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg?.senderId === currentUserId ? "justify-end" : "justify-start"}`}
          >
            <MsgBox message={msg} isSender={msg?.senderId === currentUserId} />
          </div>
        ))
      )}
    </div>
  );
};

export default ChatArea;
