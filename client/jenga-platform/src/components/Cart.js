import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Cart() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [deleteItem, setDeletedItem] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  // delete item from cart
  async function handleDelete(id) {
    let result = await fetch(`http://localhost:9292/carts/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getCartItems();
  }

  async function getCartItems() {
    let result = await fetch("http://localhost:9292/carts");
    result = await result.json();
    setItems(result);
  }

  return (
    <div className="container-card">
      <h1>Cart Items</h1>
      {items.map((item) => {
        return (
          <div className="card-container" key={item.id}>
            <div className="card-cart">
              <img src={item.image_url} alt={item.title}></img>
              <div>
                <h2>{item.title}</h2>
                <h3>{item.price} KES</h3>
              </div>
              <button onClick={() => handleDelete(item.id)}>Remove Item</button>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
