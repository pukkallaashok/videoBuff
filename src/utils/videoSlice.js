import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoData: null,
    filteredVideo: null,
  },
  reducers: {
    getYoutubeData: (state, action) => {
      state.videoData = action.payload;
    },
    getFilteredVideo: (state, action) => {
      state.filteredVideo = action.payload;
    },
  },
});

export const { getYoutubeData, getFilteredVideo } = videoSlice.actions;
export default videoSlice.reducer;
