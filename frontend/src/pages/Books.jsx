import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  });

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:1000/api/v1/deleteBook/${bookId}`);
      setData(Data.filter((item) => item._id !== bookId)); // Update state to remove deleted book
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <div
      className="bg-dark border-bottom border-top"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {Data ? (
        <BooksSection data={Data} onDelete={deleteBook}/>
      ) : (
        <div className="text-white">loading...</div>
      )}
    </div>
  );
};

export default Books;
