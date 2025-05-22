import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../../redux/slices/messageSlice";

const MsgInput = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const receiverUserId = useSelector((state) => state.chat.targetUser?.userId);
  const handleSendClick = (msg) => {
    const trimmedMsg = msg.trim();
    if (trimmedMsg) {
      console.log("Sending message:", trimmedMsg);
      console.log("SenderId", currentUserId);
      // adding the msg to Redux State for optimistic UI
      dispatch(
        addMessage({
          msg: trimmedMsg,
          senderId: currentUserId,
        }),
      );
      setMsg(""); // Immediately clear the input field
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="flex-grow p-2 border rounded-md"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        onClick={() => handleSendClick(msg)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Send
      </button>
    </div>
  );
};

export default MsgInput;
