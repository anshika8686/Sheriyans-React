import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        Horizon Courts
      </div>

      <div className="navbar-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>

      <button className="navbar-btn">
        Book Now →
      </button>

    </nav>
  );
};

export default Navbar;

