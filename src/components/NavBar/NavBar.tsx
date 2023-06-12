import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SuperbaseClient from "../SuperBase/SuperbaseClient";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [users] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav id="nav">
      <div className="nav-container">
        <button className="nav-btn" onClick={showNavbar}>
          {isNavbarOpen ? (
            <FaTimes className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>
        <div className={`header-nav ${isNavbarOpen ? "responsive_nav" : ""}`}>
          <SuperbaseClient profile={users} />
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/buycards" className="nav-link">
            Buy Cards
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
