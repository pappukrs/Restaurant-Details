import React from "react";
import  './Card.css'
import Buttons from './Buttons'
const Card = ({ category, name,place, url,rating,votes,reviews,price }) => {
  return (
    <>
      <div className="card">
        <div className="img">
            <img src={url} alt="img" />
        </div>
         <div className="nameplace">
            <div className="name">{name}</div>
            <div className="cat">{place}</div>
         </div>
         <div className="category">{category}</div>
        <div className="text">
          <div className="t-left">
            <div className="price">{price}</div>
            <div className="payment">payment</div>
          </div>
          <div className="t-right">
              <div className="rating">{rating}</div>
              <div className="votes">{votes}</div>
              <div className="views">{reviews}</div>
          </div>
        </div>
        <div className="favourite">
       <Buttons text="Add to Favorite" />
        </div>
      </div>
    </>
  );
};

export default Card;
