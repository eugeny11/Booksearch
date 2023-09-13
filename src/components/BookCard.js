import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = ({ book, books }) => {
  const { imageLinks, title, subtitle, authors } = book.volumeInfo;
  const authorList = authors ? authors.join(", ") : "Unknown";
  const category = book.volumeInfo.categories
    ? book.volumeInfo.categories[0]
    : "Unknown";

  return (
    <div className="book-card">
      <img
        src={imageLinks?.thumbnail || imageLinks?.smallThumbnail || "No image"}
        alt={subtitle || title}
      />
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>Category: {category}</p>
      <p>Authors: {authorList}</p>
      <Link to={`/book/${book.id}`} className="book-link">
        More details...
      </Link>
    </div>
  );
};

export default BookCard;
