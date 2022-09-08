import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItem(response);
      });
  }, []);

  return (
    <div className="card-info">
      <img src={item.image} alt={item.title}></img>
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
export default Item;
