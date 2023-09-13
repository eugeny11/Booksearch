import BooklistContainer from "./BooklistContainer";
import SearchBar from "./SearchBar";
import { fetchBooksAsync } from "../store/thunks/BookThunk";
import {
  setSort,
  setCategory,
  setSearchValue,
} from "../store/slices/FilterSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { updateBookList } from "./UpdateBooksList";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filters.category);
  const sortType = useSelector((state) => state.filters.sort);
  const searchValue = useSelector((state) => state.filters.searchValue);

  const currentPage = useSelector((state) => state.books.currentPage);
  const nextPage = currentPage + 1;

  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(setSearchValue(newValue));
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    dispatch(setCategory(newCategory));
  };

  const handleSortChange = (e) => {
    const newSortType = e.target.value;
    dispatch(setSort(newSortType));
  };

  const handleSearch = () => {
    dispatch(
      fetchBooksAsync({
        searchValue: searchValue,
        category: category,
        sortType: sortType,
        startIndex: nextPage,
      })
    );
    console.log("handle search");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <SearchBar
        onSearchInputChange={handleSearchInputChange}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <BooklistContainer />
    </div>
  );
};

export default SearchContainer;
