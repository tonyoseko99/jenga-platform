import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Items from "./components/Items";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="root">
      
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element= {<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/carts" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
