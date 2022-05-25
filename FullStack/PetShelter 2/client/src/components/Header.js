import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    // The HTML5 Header tag functions as a div here
    <header>
      <h1>Pet Shelter</h1>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <span> | </span>
      <NavLink className="nav-link" to="/new">
        Add a Pet
      </NavLink>
    </header>
  );
}

export default Header;
