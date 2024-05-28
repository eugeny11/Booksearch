import React from "react";
import "./SearchBar.css";
import { useSelector } from "react-redux";

const SearchBar = ({
  onSearchInputChange,
  onCategoryChange,
  onSortChange,
  onSearch,
  onKeyPress,
}) => {
  const searchValue = useSelector((state) => state.filters.searchValue);
  const category = useSelector((state) => state.filters.category);
  const sortType = useSelector((state) => state.filters.sortType);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Book search..."
        value={searchValue}
        onChange={onSearchInputChange}
        onKeyPress={onKeyPress}
      />
      <select value={category} onChange={onCategoryChange}>
        <option value="all">All categories</option>
        <option value="art">Art</option>
        <option value="biography">Biography</option>
        <option value="computers">Computers</option>
        <option value="history">History</option>
        <option value="medical">Medical</option>
        <option value="poetry">Poetry</option>
      </select>
      <select value={sortType} onChange={onSortChange}>
        <option value="relevance">Relevant search</option>
        <option value="newest">Newest</option>
      </select>
      <button onClick={onSearch}>Search...</button>
    </div>
  );
};

export default SearchBar;
