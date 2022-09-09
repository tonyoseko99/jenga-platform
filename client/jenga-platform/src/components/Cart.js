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
    <div className="container">
      {items.map((item) => {
        return (
          <>
            <div className="card-cart" key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image_url} alt={item.title}></img>
              <h2>{item.price}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Cart;
