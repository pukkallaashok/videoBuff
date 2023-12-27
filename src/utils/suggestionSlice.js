import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    searchSuggestions: null,
    searchQuery: "",
  },
  reducers: {
    getSuggestions: (state, action) => {
      state.searchSuggestions = action.payload;
    },
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { getSuggestions, getSearchQuery } = suggestionSlice.actions;

export default suggestionSlice.reducer;
