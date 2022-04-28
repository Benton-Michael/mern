import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  // Link and NavLink - differences (same functionality but..)
  // using NavLink will provide us with a free active link class that is managed by the
  // react router dom

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
