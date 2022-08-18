import React, { useState } from "react";
import Logo from "../Assets/IMG/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <div className="nav-buttons">
        <span
          className={`open-menu ${isMenuOpen ? "none" : ""}`}
          onClick={() => setMenuOpen(true)}
        >
          <i className="fal fa-bars"></i>
        </span>
        <span
          className={`close-menu ${isMenuOpen ? "show-menu-button" : "none"}`}
          onClick={() => setMenuOpen(false)}
        >
          <i className="fal fa-times"></i>
        </span>
      </div>
      <div className="nav-container flex-row">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="" />
        </Link>
        <div className={`${isMenuOpen ? "flex-row nav-items" : "none"}`}>
          <Link className="nav-item poppins" to="/">
            Home
          </Link>
          <Link className="nav-item poppins" to="/">
            About
          </Link>
          <Link className="nav-item poppins" to="/">
            Services
          </Link>
          <Link className="nav-item poppins" to="/">
            Industries
          </Link>
          <Link className="nav-item poppins" to="/">
            Careers
          </Link>
          <Link className="nav-item poppins" to="/">
            Blog
          </Link>
          <Link className="nav-item poppins" to="/">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
