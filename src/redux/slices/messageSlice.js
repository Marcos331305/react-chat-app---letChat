import { createSlice, nanoid } from "@reduxjs/toolkit";

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
      prepare({ msg, senderId }) {
        return {
          payload: {
            message: {
              id: nanoid(),
              msg,
              senderId,
              createdAt: new Date().toISOString(),
              status: "sending",
            },
          },
        };
      },
    },
    updateMessageStatus(state, action) {
      const { messageId, status } = action.payload;
      const msg = state.messages.find((m) => m.id === messageId);
      if (msg) msg.status = status;
    },
    deleteMessage(state, action) {
      const { messageId } = action.payload;
      state.messages = state.messages.filter((msg) => msg.id !== messageId);
    },
    setMessages(state, action) {
      state.messages = action.payload;
      console.log("Messages set in Redux:", state.messages);
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
