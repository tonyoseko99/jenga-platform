import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Home from "./Home";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main">
      <nav className="navbar">
          <Link to="/"><h1>Jenga Shop</h1></Link>
        <nav className="nav-items">
          <Link to="/carts"><FaCartArrowDown /> Cart</Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/login"><button>Signup</button></Link>
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;

{/* <a href="/carts"><FaCartArrowDown /> Cart</a>
        <a className="login-form" href="/login"><button>Login</button></a> */}