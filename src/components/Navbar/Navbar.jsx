import { NavLink } from "react-router-dom";
import { useState } from "react";
import hamburgerImg from "../../img/hamburger-icon.png";

import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Tattoo Paradise</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h4>
            <img src={hamburgerImg} alt="Hamburger icon" />
          </h4>
        </div>
        <div className={`nav-elements  ${showNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/appointments">Book appointment</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
