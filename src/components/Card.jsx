import React from "react";
import '../styles/Card.css'

function Card({ item ,handleClick }) {
  return (
    <div className="cards">
      <div className="image_box">
        <img src={item.img} alt="image" />
      </div>
      <div className="details">
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>{item.price} Rs</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
