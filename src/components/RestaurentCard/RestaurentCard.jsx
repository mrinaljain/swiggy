import React from "react";
import "./RestaurentCard.css";
const RestaurentCard = (props) => {
   const { name, areaName, costForTwo, cloudinaryImageId, avgRating } = props.restaurantData.info;
   function handelClick(e) {
      e.preventDefault();
      window.location = props.restaurantData.cta.link;

   }
   return (
      <div className="restaurentCard">
         <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} className="restaurentImage" />
         <h3 className="restaurentName">{name}</h3>
         <p className="restaurentDescription">{areaName}</p>
         <p className="restaurentPrice">{costForTwo}</p>
         <p className="restaurentPrice">{avgRating}</p>
         <button className="orderButton" onClick={handelClick}>Order Now</button>
      </div>
   )
}

export default RestaurentCard;