import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item({item}) {
//   const { id } = useParams();
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products`)
//       .then((response) => response.json())
//       .then((response) => console.log(response));
//   }, [id]);
  return (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.title}></img>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>View Item</button>
      </div>
  );
}
export default Item;