import React from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // Importing phone icon
import "./App.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <p className="logo">🐾 Paws</p>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/pets" className="nav-link">Adopt</Link></li>
        <li><Link to="/rehome" className="nav-link">Rehome</Link></li>
        <li><Link to="/signup" className="nav-link">Login</Link></li>
        <li><Link to="/profile" className="nav-link">Profile</Link></li>
     
        <li>
          <a href="#contact" className="nav-link contact-icon">
            <FiPhone size={20} /> {/* Phone icon for Contact */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
