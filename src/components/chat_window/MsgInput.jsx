import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

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
  const receiverUserId = useSelector((state) => state.chat.targetUserId);
  const activeChatId = useSelector((state) => state.chat?.activeChatId);
  const receiverUserName = useSelector((state) => state.chat.targetUserName);
  const currentUserName = useSelector((state) => state.auth.user?.name);
  const handleSendClick = async (msg) => {
    const trimmedMsg = msg.trim();
    if (trimmedMsg) {
      // consistent ID for msg in Redux and Appwrite
      const msgId = nanoid();
      // adding the msg to Redux State for optimistic UI
      dispatch(
        addMessage({
          msgId: msgId,
          msg: trimmedMsg,
          senderId: currentUserId,
          status: "waiting",
        })
      );
      setMsg(""); // Immediately clear the input field
      // now do the msgSeding
      // first check the msg's chat if not then create newOne
      await getOrCreateChat({
        currentUserId: currentUserId,
        currentUserName: currentUserName,
        targetUserId: receiverUserId,
        targetUserName: receiverUserName,
        activeChatId: activeChatId,
      });
      const msgSendingResult = await sendMsg({
        msgId: msgId,
        chatId: activeChatId,
        senderId: currentUserId,
        receiverId: receiverUserId,
        msg: trimmedMsg,
      });
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
