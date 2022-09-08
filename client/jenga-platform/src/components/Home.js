import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

function Home() {
  return (
    <div className="main-container">
      <h2>Welcome to Jenga Shop</h2>
      <Link to={`items`} onClick={() => <Items />}>
        <button>Shop</button>
      </Link>
    </div>
  );
}
export default Home;
