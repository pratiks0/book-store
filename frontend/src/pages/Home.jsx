import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa"; // Font Awesome icon

const Home = () => {
  return (
    <div className="Home-Page">
      <div className="container">
        <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column text-section" style={{ minHeight: "91.5vh" }}>
          <h2>Book Store</h2>
          <h3>For You</h3>
          <p>Checkout The Books From Here.</p>
          <Link to="/Books">
            <button className="viewBook my-3 text-white">View Books</button>
          </Link>
        </div>
      </div>

      {/* Floating book icons for a dynamic background effect */}
      <FaBook className="floating-icon" />
      <FaBook className="floating-icon" />
      <FaBook className="floating-icon" />
    </div>
  );
};

export default Home;
