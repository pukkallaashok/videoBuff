import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    getCacheData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { getCacheData } = cacheSlice.actions;

export default cacheSlice.reducer;
