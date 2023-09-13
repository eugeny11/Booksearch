import { useSelector } from "react-redux";
import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";
import LoadingIndicator from "./LoadingIndicator";
import { v4 as uuidv4 } from "uuid";

const BookList = ({ books, loading, onLoadMore, hasMore }) => {
  return (
    <div className="book-list">
      <div className="books">
        {books?.map((book) => (
          <BookCard key={uuidv4()} book={book} books={books} />
        ))}
      </div>
      {loading && <LoadingIndicator />}
      <div className="load-more">
        {hasMore && <button onClick={onLoadMore}>Load more</button>}
      </div>
    </div>
  );
};

export default BookList;
