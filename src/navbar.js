import React from "react";
import { HashLink as Link } from "react-router-hash-link"; // for smooth scrolling

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#photos">Photos</Link>
        </li>
        <li>
          <Link to="#videos">Videos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
