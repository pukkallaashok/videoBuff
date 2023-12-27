import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import PlayingVideoSlice from "./PlayingVideoSlice";
import suggestionSlice from "./suggestionSlice";
import cacheSlice from "./cacheSlice";
import liveCommentSlice from "./liveCommentSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    playingVideoByID: PlayingVideoSlice,
    suggestions: suggestionSlice,
    search: cacheSlice,
    chat: liveCommentSlice,
  },
});

export default store;
