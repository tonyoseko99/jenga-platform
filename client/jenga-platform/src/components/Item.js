import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaProductHunt } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, addCart] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [review, setReview] = useState([]);
  const [userReview, setUserReview] = useState([]);

  // post item
  const handleClick = (item) => {
    cart.push();
    console.log(item);
    const title = item.title;
    const price = item.price;
    const description = item.description;
    const image_url = item.image_url;

    axios
      .post("http://localhost:9292/carts", {
        title,
        description,
        price,
        image_url,
      })
      .then(() => {
        alert("product added to cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:9292/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // returns the product and its properties
        setItem(response);
        // returns the reviews for the product
        console.log(response.reviews);
        setReview(response.reviews);
        
      });
  }, [id]);

  // supplier information by id
  useEffect(() => {
    fetch(`http://localhost:9292/suppliers/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setSupplier(response);
      });
  }, [id]);

  // reviews by users
  useEffect(() => {
    fetch(`http://localhost:9292/users/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserReview(response);
      });
  }, [id]);

 

  return (
    <div className="item">
      <div className="card-info">
        <img src={item.image_url} alt={item.title}></img>
        <div>
          <h2>{item.title}</h2>
          <hr></hr>
          <p>{item.description}</p>
          <p>
            supplied by: <strong>{supplier.name}</strong>
          </p>
          <p className="quantity">
            <strong>{supplier.quantity_left}</strong> product(s) in stock
          </p>
          <p>
            <strong>{item.price} KES</strong>
          </p>

          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        {review.map((reviewItem) => {
          return(
            <div className="review-item" key={reviewItem.id}>
              <p><strong>{userReview.username}</strong>: <em>{reviewItem.review_content}</em></p>
            </div>
            
          )
        })}
      </div>
    </div>
  );
}
export default Item;
