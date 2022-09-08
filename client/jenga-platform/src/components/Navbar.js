import React from "react";
import {FaCartArrowDown} from "react-icons/fa";
function Navbar() {
  return (
    <div className="main">
      <nav className="navbar">
        <h1>Jenga Shop</h1>
        <button>Logout</button>
        <FaCartArrowDown />
      </nav>
    </div>
  );
}
export default Navbar;