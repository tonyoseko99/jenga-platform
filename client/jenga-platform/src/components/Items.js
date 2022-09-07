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
      <div className="card">
        {items.map((item) => {
          return (
            <div className="container" key={item.id}>
              <img src={item.image} alt="title"></img>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <h3>price: ${item.price}</h3>
                <Link to={`/item/${item.id}`} onClick={() => <Item key={item.id} item={item} />}>
                  Add to Cart
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Items;
