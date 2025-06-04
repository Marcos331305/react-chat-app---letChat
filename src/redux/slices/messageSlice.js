import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [], // flat array of all messages
  },
  reducers: {
    addMessage: {
      reducer(state, action) {
        state.messages.push(action.payload.message);
      },
      prepare({ msgId, msg, senderId, status }) {
        return {
          payload: {
            message: {
              msgId,
              msg,
              senderId,
              status,
              createdAt: new Date().toISOString(),
            },
          },
        };
      },
    },
    updateMessageStatus(state, action) {
      const { msgId, status } = action.payload;
      const msg = state.messages.find((m) => m.msgId === msgId);
      if (msg) msg.status = status;
    },
    deleteMessage(state, action) {
      const { msgId } = action.payload;
      state.messages = state.messages.filter((msg) => msg.msgId !== msgId);
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    clearMessagesForChat(state, action) {
      const { chatId } = action.payload;
      state.messages = state.messages.filter((msg) => msg.chatId !== chatId);
    },
  },
});

export const {
  addMessage,
  updateMessageStatus,
  deleteMessage,
  setMessages,
  clearMessagesForChat,
} = messageSlice.actions;

export default messageSlice.reducer;
