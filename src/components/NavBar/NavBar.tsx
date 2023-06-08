import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav id="nav">
      <h3 className="logo">LOGO</h3>
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
            My work
          </a>
          <a href="/#" className="nav-link">
            Blog
          </a>
          <a href="/#" className="nav-link">
            About me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
