import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Items({item}) {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, []);

  useEffect(() => {
    setSearchItems(items);
  }, [items]);
  return (
    <>
      <div className="card-container">
        {searchItems.map((item) => {
          return <Items item={item} key={item.id} />;
        })}
      </div>

      <div className="card" >
        {items.map((item) => {
          return <>
          
            <img src={item.image} alt="title"></img>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div>
          <h3>price: ${item.price}</h3>
          {/* <Link to={`item/${item.id}`} onClick={() => <Item key={item.id} />}>
            Buy
          </Link> */}
        </div>
          </>
        })}
        
      </div>
    </>
  );
}
export default Items;