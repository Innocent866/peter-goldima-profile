import React from "react";
import "../style/navbar.css";
import Canvas from "./Canvas";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav-main-div">
        <div className="container nav pe-5">
          <Link to="/">
            {/* Logo */}
            <img src="path-to-logo.png" alt="LOGO" />
          </Link>
          <div>
            {/* Responsive Canvas */}
            <div className="d-lg-none d-md-none">
              <Canvas />
            </div>
            <ul className="nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
