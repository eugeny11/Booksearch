import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/BookSlice";
import filterReducer from "./slices/FilterSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filters: filterReducer,
  },
});

export default store;
