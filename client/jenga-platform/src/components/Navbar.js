import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Home from "./Home";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main">
      <nav className="navbar">
        <Link to="/">
          <h1>Jenga Shop</h1>
        </Link>
        <nav className="nav-items">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/carts">
                <FaCartArrowDown /> Cart
              </Link>
              <Link to="/login">
                <button>Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button>Login</button>
              </Link>
            </>
          )}
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;

{
  /* <a href="/carts"><FaCartArrowDown /> Cart</a>
        <a className="login-form" href="/login"><button>Login</button></a> */
}
