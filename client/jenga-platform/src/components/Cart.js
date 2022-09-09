import React, { useEffect, useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  // fetch items from cart
  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItems(response);
      });
  }, []);

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
              <button>Remove Item</button>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
