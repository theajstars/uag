import React, { useState } from "react";
import Logo from "../Assets/IMG/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import Cookies from "js-cookie";
export default function Navbar() {
  let navigate = useNavigate();
  const logoutUser = () => {
    Cookies.remove("token");
    navigate("/login", { replace: true });
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/dashboard">My Profile</Link>,
        },
        {
          key: "2",
          label: (
            <span onClick={logoutUser}>
              Logout &nbsp; <i className="far fa-power-off"></i>
            </span>
          ),
        },
      ]}
    />
  );
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
      <span className="profile-nav">
        <Dropdown overlay={menu} placement="bottom">
          <span className="profile-nav-icon">
            <i className="fal fa-user"></i>
          </span>
        </Dropdown>
      </span>
    </>
  );
}
