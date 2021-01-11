import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <span className="navigation">

    <nav className="navbar navbar-expand-lg">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pictures"
              className={window.location.pathname === "/pictures" ? "nav-link active" : "nav-link"}
            >
              Pictures
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/videos"
              className={window.location.pathname === "/videos" ? "nav-link active" : "nav-link"}
            >
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About Us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
    </span>
  );
}

export default Navbar;
