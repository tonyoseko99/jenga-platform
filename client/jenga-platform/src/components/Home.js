import React, { useEffect, useState } from "react";
import Items from "./Items";

function Home() {
  return (
    <div className="main-container">
      <h2>Welcome to Jenga Shop</h2>
      <button className="shopping-btn" href="#Items">Shop</button>
    </div>
  );
}
export default Home;