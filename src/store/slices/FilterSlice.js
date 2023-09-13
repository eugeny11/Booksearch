import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  sort: "relevance",
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
