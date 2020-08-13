import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Image of the Day</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavBar;
