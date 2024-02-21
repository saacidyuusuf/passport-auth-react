import React from "react";
import { Link } from "react-router-dom";

const bookCard = ({ book }) => {
  return (
    <Link className="bookhaye" to={`/book/${book.id}`} >
      <div className="book">
        <div>
          <p>{book.name}</p>
          <p>{book.category}</p>
          <p>{book.price}</p>
        </div>
        <p className="text">{book.text}</p>
      </div>
    </Link>
  );
};

export default bookCard;
