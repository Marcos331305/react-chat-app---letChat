import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetUser: null,
  activeChatId: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setTargetUser: (state, action) => {
      state.targetUser = action.payload;
    },
    setActiveChatId: (state, action) => {
      state.activeChatId = action.payload;
      localStorage.setItem("activeChatId", action.payload);
    },
  },
});

export const { setTargetUser, setActiveChatId } = chatSlice.actions;

export default chatSlice.reducer;
