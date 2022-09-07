import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, [id]);
  return (
    <>
      <div className="item-info" key={item.id}>
        <img src={item.image} alt={item.title}></img>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h2>Add to cart</h2>
      </div>
    </>
  );
}
export default Item;