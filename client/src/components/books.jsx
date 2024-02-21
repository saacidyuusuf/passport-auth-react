import React from "react";
import book from "./data";
import BookCard from "./bookCard";
import { useLocation } from "react-router-dom";

const books = () => {
    const location = useLocation()
    const path = location.pathname.split('/'[2])
    const filterBooks = book.filter(book => book.category === path)
    const singlebook = book.find((b) => b.id.toString() === path) 
    
  return (
    <div>
      <h1>hello books</h1>
      {book.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
};

export default books;
