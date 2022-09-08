import axios from 'axios';
import React, { useState, useEffect } from "react";
import { FaProductHunt } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, addCart] = useState([]);

  // post item 
  const handleClick = (item) => {
    cart.push()
    console.log(item);
    const title = item.title
    const price = item.price
    const description = item.description
    const image_url = item.image_url

    axios.post("http://localhost:9292/products", {
      title,
      description,
      price,
      image_url
    }).then(()=> {
      alert("product posted")
    }).catch((error)=>{console.log(error)})
  }

  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setItem(response);
      });
  }, [id]);

  return (
    <div className="card-info">
      <img src={item.image} alt={item.title}></img>
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>
          <em>{item.price} KES</em>
        </p>
        <p>Rating: {item.rating && item.rating.rate && item.rating.count}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Item;
