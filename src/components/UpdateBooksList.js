import { fetchBooksAsync } from "../store/thunks/BookThunk";

export const updateBookList =
  (searchValue, category, sortType) => (dispatch) => {
    dispatch(
      fetchBooksAsync({ searchValue, category, sortType, startIndex: 0 })
    );
  };
