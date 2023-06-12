import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SuperbaseClient from "../SuperBase/SuperbaseClient";
import "./Navbar.css";

function Navbar() {
  const [users] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav id="nav">
      <SuperbaseClient profile={users} />
      <div className="nav-container">
        <button className="nav-btn" onClick={showNavbar}>
          {isNavbarOpen ? (
            <FaTimes className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>
        <div className={`header-nav ${isNavbarOpen ? "responsive_nav" : ""}`}>
          <a href="/#" className="nav-link">
            Home
          </a>
          <a href="/#" className="nav-link">
            Buy Cards
          </a>
          <a href="/#" className="nav-link">
            Profile {users}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
