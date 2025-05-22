import { useSelector } from "react-redux";

import MsgBox from "../chat_Area/MsgBox";

const ChatArea = ({ isLoading }) => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const messages = useSelector((state) => state.messages.messages);
  if (messages) {
    console.log(messages);
  }
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
