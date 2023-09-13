import BookList from "./BookList";
import React, { useEffect } from "react";
import { fetchBooksAsync, loadMoreBooksAsync } from "../store/thunks/BookThunk";
import { useDispatch, useSelector } from "react-redux";

const BooklistContainer = () => {
  const dispatch = useDispatch();
  const {
    items: books,
    loading,
    totalItems,
  } = useSelector((state) => state.books.books);
  const currentPage = useSelector((state) => state.books.currentPage);
  const searchValue = useSelector((state) => state.filters.searchValue);
  const category = useSelector((state) => state.filters.category);
  const sortType = useSelector((state) => state.filters.sortType);

  useEffect(() => {
    dispatch(
      fetchBooksAsync({
        searchValue: searchValue,
        category: category,
        sortType: sortType,
        startIndex: currentPage + 1,
      })
    );
  }, [dispatch]);

  const loadMoreBooks = async () => {
    if (searchValue && category && sortType && currentPage !== undefined) {
      await Promise.all([searchValue, category, sortType, currentPage]);
      dispatch(
        loadMoreBooksAsync({
          searchValue,
          category,
          sortType,
          startIndex: currentPage + 1,
        })
      );
      console.log(searchValue, category, sortType, currentPage);
    } else {
      console.log("Undefined consts");
    }
  };
  return (
    <BookList
      books={books}
      loading={loading}
      onLoadMore={loadMoreBooks}
      hasMore={currentPage * 30 < totalItems}
    />
  );
};

export default BooklistContainer;
