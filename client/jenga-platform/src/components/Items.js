import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, []);

  useEffect(() => {
    setSearchItems(items);
  }, [items]);
  return (
    <div className="card-container">
      {items.map((item) => {
        return (
          <div className="container" key={item.id} >
            <div className="card">
              <img src={item.image} alt={item.title}></img>
              <h2>{item.title}</h2>
              <div>
                <h3>{item.price} KES</h3>
                <Link
                  to={`/items/${item.id}`}
                  onClick={() => <Item key={item.id} />}
                >
                  <button>Shop</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Items;
