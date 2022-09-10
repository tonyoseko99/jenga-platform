import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Cart() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [deleteItem, setDeletedItem] = useState([]);

  // fetch items from cart db table
  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItems(response);
      });
  }, []);

  // delete item from cart
  const handleDelete = (item) => {
    console.log(item);
    const title = item.title
    const price = item.price
    const description = item.description
    const image_url = item.image_url

    axios.delete(`http://localhost:9292/carts/${id}`, {
      title,
      description,
      price,
      image_url
    }).then(()=> {
      alert("product removed from cart")
    }).catch((error)=>{console.log(error)})
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
              <button onClick={() => handleDelete(item)}>Remove Item</button>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
