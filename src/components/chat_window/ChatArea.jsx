import { useDispatch, useSelector } from "react-redux";

import MsgBox from "../chat_Area/MsgBox";
import useRealTimeMessages from "../../hooks/useRealtimeMessages";
import { addMessage } from "../../redux/slices/messageSlice";

const ChatArea = ({ isLoading }) => {
  const dispatch = useDispatch();
  // current chatId
  const chatId = useSelector((state) => state.chat?.activeChatId);
  console.log("chatid sended to realtime: ", chatId);
  const currentUserId = useSelector((state) => state.auth.user.$id);
  console.log("currentUserId: ", currentUserId);
  const messages = useSelector((state) => state.messages.messages);
  if (messages) {
    console.log("Redux Messages: ", messages);
  }
  // listen for real-time messages in chatArea only for targeted user
  useRealTimeMessages(chatId, (newMsg) => {
    console.log("🔁 Received message in subscription:", newMsg);
    // if (newMsg.senderId !== currentUserId) {
    dispatch(addMessage(newMsg));
    // }
  });

  return (
    <div className="flex flex-col space-y-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : messages.length === 0 ? (
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
            className={`flex ${msg.senderId === currentUserId ? "justify-end" : "justify-start"}`}
          >
            <MsgBox message={msg} isSender={msg.senderId === currentUserId} />
          </div>
        ))
      )}
    </div>
  );
};

export default ChatArea;
