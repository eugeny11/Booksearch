import { fetchBooksAsync, loadMoreBooksAsync } from "../thunks/BookThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {
    items: [],
    totalItems: 0,
  },
  loading: false,
  currentPage: 0,
  // Другие поля вашего состояния...
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        const { items, totalItems } = action.payload;
        state.books.items = [...items];
        state.books.totalItems = totalItems;
        state.loading = false;
        state.currentPage += 1;
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loadMoreBooksAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMoreBooksAsync.fulfilled, (state, action) => {
        const { items, totalItems } = action.payload;
        state.books.items.push(...items);
        state.books.totalItems = totalItems;
        state.loading = false;
        state.currentPage += 1;
      })
      .addCase(loadMoreBooksAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
