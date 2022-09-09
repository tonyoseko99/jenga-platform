import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Home from "./Home";
function Navbar({setToken}) {
  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="main">
      <nav className="navbar">
        <h1>Jenga Shop</h1>
        <button onClick={() => <Home />}>Logout</button>
        <a href="/carts"><FaCartArrowDown /></a>
      </nav>
    </div>
  );
}
export default Navbar;
