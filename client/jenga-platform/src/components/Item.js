import axios from 'axios';
import React, { useState, useEffect } from "react";
import { FaProductHunt } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, addCart] = useState([]);
  const [supplier, setSupplier] = useState([]);

  // post item 
  const handleClick = (item) => {
    cart.push()
    console.log(item);
    const title = item.title
    const price = item.price
    const description = item.description
    const image_url = item.image_url

    axios.post("http://localhost:9292/carts", {
      title,
      description,
      price,
      image_url
    }).then(()=> {
      alert("product added to cart")
    }).catch((error)=>{console.log(error)})
  }

  

  useEffect(() => {
    fetch(`http://localhost:9292/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setItem(response);
      });
  }, [id]);

  // supplier information by id
  useEffect(() => {
    fetch(`http://localhost:9292/suppliers/${id}`)
    .then((response) => response.json())
    .then((response) => {
      setSupplier(response);
    })
  })

  return (
    <div className="card-info">
      <img src={item.image_url} alt={item.title}></img>
      <div>
        <h2>{item.title}</h2>
        <hr></hr>
        <p>{item.description}</p>
        <p>supplied by: <strong>{supplier.name}</strong></p>
        <p className='quantity'><strong>{supplier.quantity_left}</strong> products in stock</p>
        <p>
          <strong>{item.price} KES</strong>
        </p>
        
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Item;