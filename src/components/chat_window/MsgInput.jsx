import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../../redux/slices/messageSlice";
import { useGetOrCreateChatMutation } from "../../redux/api/chatApiSlice";
import { useSendMessageMutation } from "../../redux/api/msgApiSlice";

const MsgInput = () => {
  const [sendMsg, { isSuccess, error }] = useSendMessageMutation();
  const [getOrCreateChat, { data: chat, isLoading }] =
    useGetOrCreateChatMutation();
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const receiverUserId = useSelector((state) => state.chat.targetUser?.userId);
  const receiverUserName = useSelector(
    (state) => state.chat.targetUser?.username,
  );
  const handleSendClick = async (msg) => {
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
      // now do the msgSeding
      // first check the msg's chat if not then create newOne
      const result = await getOrCreateChat({
        currentUserId: currentUserId,
        targetUserId: receiverUserId,
        targetUserName: receiverUserName,
      });
      console.log("chatId: ", result.data.id);
      const chatId = result.data.id;
      const msgSendingResult = await sendMsg({
        chatId: chatId,
        senderId: currentUserId,
        receiverId: receiverUserId,
        msg: trimmedMsg,
      });
      console.log("msgSendingResult: ", msgSendingResult);
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
