import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/geps2.jpg"; // Ensure your logo is inside "assets" folder

const Header = () => {
  return (
    <header className="header">
      {/* Company Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>

      {/* Navigation Tabs */}
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>AboutUs</NavLink>
        
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/career" className={({ isActive }) => (isActive ? "active" : "")}>Career</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>ContactUs</NavLink>
        
      </nav>
    </header>
  );
};

export default Header;
