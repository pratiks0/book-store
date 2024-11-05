import React from "react";
import "./Home.css";
import Image from "../images/imgirl.webp";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-item-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "90px" }}>Book Store</h2>
          <h3 style={{ fontSize: "50px" }}>For You</h3>
          <p style={{ color: "silver" }}>Checkout The Books From Here.</p>
          <button className="viewBook my-3 text-white">View Books</button>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid" src={Image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
