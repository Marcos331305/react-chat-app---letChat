import { useSelector } from "react-redux";

import MsgBox from "../chat_Area/MsgBox";

const ChatArea = ({ messages, isLoading }) => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  return (
    <div className="flex flex-col space-y-4">
      {isLoading ? (
        <div>Loading...</div>
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
