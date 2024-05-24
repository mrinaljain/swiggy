import React from "react";
import "./RestaurentCard.css";
const RestaurentCard = (props) => {
   // ! nested Destructuring
   const { name, areaName, cuisines, cloudinaryImageId, avgRating, sla: { slaString }, aggregatedDiscountInfoV3: { header, subHeader } } = props.restaurantData?.info;
   function handelClick(e) {
      e.preventDefault();
      window.location = props.restaurantData.cta.link;

   }
   return (
      <div className="card">
         <div className="card-image">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
            <div className="card-discount">{`${header} ${subHeader}`}</div>
         </div>
         <div className="card-details">
            <h3>{name}</h3>
            <p>⭐ {avgRating} • {slaString}</p>
            <p className="cusine">{cuisines.join(",")}</p>
            <p>{areaName}</p>
         </div>
      </div>
   )
}

export default RestaurentCard;