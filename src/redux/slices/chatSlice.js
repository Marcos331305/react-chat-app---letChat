import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetUserName: null,
  targetUserId: null,
  activeChatId: null,
  chats: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setTargetUserName: (state, action) => {
      state.targetUserName = action.payload;
      localStorage.setItem("targetUserName", action.payload);
    },
    setTargetUserId: (state, action) => {
      state.targetUserId = action.payload;
      localStorage.setItem("targetUserId", action.payload);
    },
    setActiveChatId: (state, action) => {
      state.activeChatId = action.payload;
      localStorage.setItem("activeChatId", action.payload);
    },
  },
});

export const { setTargetUserName, setTargetUserId, setActiveChatId } = chatSlice.actions;

export default chatSlice.reducer;
