import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "../../api/api";

export const fetchBooksAsync = createAsyncThunk(
  "books/fetchBooks",
  async (params, { rejectWithValue }) => {
    const { searchValue, category, sortType, startIndex } = params;
    try {
      const data = await fetchBooks(
        searchValue,
        category,
        sortType,
        startIndex
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreBooksAsync = createAsyncThunk(
  "books/loadMoreBooks",
  async (params, { rejectWithValue }) => {
    const { searchValue, category, sortType, startIndex } = params;
    try {
      const data = await fetchBooks(
        searchValue,
        category,
        sortType,
        startIndex
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
