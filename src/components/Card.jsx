import React from "react";
import "../styles/Card.css";
const Card = ({ item, handleClick }) => {
  const { img, title, author, price } = item;

  return (
    <div>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt={title} />
        </div>

        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}Rs/-</p>
          <button onClick={() => handleClick(item)}> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
