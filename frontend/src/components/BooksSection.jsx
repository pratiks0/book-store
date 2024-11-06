import React from "react";
import "./BookSection.css"

const BooksSection = ({ data, onDelete }) => {
  return (
    <div className="book-container">
      {data &&
        data.map((item) => (
          <div key={item._id} className="book-card">
            <div>
              <img
                className="book-image"
                src={item.image}
                alt={item.bookname}
              />
            </div>
            <h6 className="book-name">
              {item.bookname.length > 19
                ? `${item.bookname.slice(0, 19)}...`
                : item.bookname}
            </h6>
            <p className="book-author">{item.author}</p>
            <p className="book-description">
              {item.description.length > 30
                ? `${item.description.slice(0, 30)}...`
                : item.description}
            </p>
            <b className="book-price">$ {item.price}</b>
            <button className="delete-button" onClick={() => onDelete(item._id)}>
              DELETE
            </button>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
