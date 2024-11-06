import React from "react";
import "./Home.css";
import Image from "../images/imgirl.webp"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-item-center border-bottom border-top">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "90px" }}>Book Store</h2>
          <h3 style={{ fontSize: "50px" }}>For You</h3>
          <p className="mb-0" style={{ color: "silver" }}>Checkout The Books From Here.</p>
          <Link to="/Books"><button className="viewBook my-3 text-white" >View Books</button></Link>
          
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid" src={Image} alt="girlImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
