import { createSlice } from "@reduxjs/toolkit";

const liveCommentSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = liveCommentSlice.actions;

export default liveCommentSlice.reducer;
