import React from "react";

function Navbar({ setToken }) {
  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="main">
      <nav className="navbar">
        <h1>Jenga Shop</h1>
        <button onClick={() => logoutHandler()}>Logout</button>
      </nav>
    </div>
  );
}
export default Navbar;