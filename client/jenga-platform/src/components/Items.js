import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Items({item}) {
  
  return (
    // search functionality
    <>
    

      {/* <div className="card-container">
        {searchItems.map((item) => {
          return <Items item={item} key={item.id} />;
        })}
      </div> */}

      <div className="card-container">
        {/* {items.map((item) => { */}
          return (
            <div className="container" key={item.id}>
              <div className="card">
                <img src={item.image_url} alt={item.title}></img>
                <h2>{item.title}</h2>
                <div>
                  <h3>{item.price} KES</h3>
                  <Link
                    to={`/items/${item.id}`}
                    onClick={() => <Item key={item.id} />}
                  >
                    <button>Shop</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        
      </div>
    </>
  );
}
export default Items;
