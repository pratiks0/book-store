import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  border-top">
        <div className="container">
          <Link className="navbar-brand text-white border-bottom border-top" to="/">
            BOOKS STORE
          </Link>
          <button
            className="navbar-toggler custom-toggler border-bottom border-top"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/AddBooks">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
