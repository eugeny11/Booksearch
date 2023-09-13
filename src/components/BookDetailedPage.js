import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateBookList } from "./UpdateBooksList";
import { Link } from "react-router-dom";

const BookDetailedPage = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books.items);

  const book = books.find((book) => book.id === bookId);
  const searchValue = useSelector((state) => state.filters.searchValue);
  const sortType = useSelector((state) => state.filters.sortType);

  if (!book) {
    return <div>Book was not found</div>;
  }

  console.log(book);

  const { imageLinks, title, subtitle, authors } = book.volumeInfo;
  const authorList = authors ? authors.join(", ") : "Unknown";
  const category = book.volumeInfo.categories
    ? book.volumeInfo.categories[0]
    : "Unknown";

  const handleReturnToList = () => {
    navigate("/");

    dispatch(updateBookList(searchValue, category, sortType));
  };

  return (
    <div className="book-detailed-page">
      <div className="book-details">
        <img
          src={
            imageLinks?.thumbnail || imageLinks?.smallThumbnail || "No image"
          }
          alt={subtitle || title}
        />
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p>Category: {category}</p>
        <p>Authors: {authorList}</p>
      </div>
      <div className="back-button" onClick={handleReturnToList}>
        Return to list
      </div>
    </div>
  );
};

export default BookDetailedPage;
