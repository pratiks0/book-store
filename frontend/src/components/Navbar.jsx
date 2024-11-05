import React from "react";
import "../App.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" to="#">
            Books Store
          </a>
          <button
            className="navbar-toggler custom-toggler"
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
                <a className="nav-link active text-white" aria-current="page" to="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" to="#">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" to="#">
                  Add Book
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
