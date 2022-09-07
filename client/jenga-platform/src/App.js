import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Items from "./components/Items";
import Item from "./components/Item";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="root">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/id" element={<Item />} />
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
