import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "toggleSideBar",
  initialState: { sideBar: true, mode: true },
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    closeSideBar: (state) => {
      state.sideBar = false;
    },
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleSideBar, closeSideBar, toggleMode } = appSlice.actions;
export default appSlice.reducer;
