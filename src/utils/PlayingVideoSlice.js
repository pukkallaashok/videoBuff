import { createSlice } from "@reduxjs/toolkit";

const PlayingVideoSlice = createSlice({
  name: "PlayingVideo",
  initialState: { playingVideo: null },
  reducers: {
    getPlayingVideo: (state, action) => {
      state.playingVideo = action.payload;
    },
  },
});

export const { getPlayingVideo } = PlayingVideoSlice.actions;

export default PlayingVideoSlice.reducer;
