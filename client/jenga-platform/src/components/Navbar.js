import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Home from "./Home";
function Navbar() {
  return (
    <div className="main">
      <nav className="navbar">
        <h1>Jenga Shop</h1>
        <a href="/carts"><FaCartArrowDown /> Cart</a>
        <a className="login-form" href="/login"><button>Login</button></a>
      </nav>
    </div>
  );
}
export default Navbar;