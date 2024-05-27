import React, { useContext } from "react";
// import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";
import { useContext } from "react";
const RestaurantCard = (props) => {
   // ! nested Destructuring
   const { id, name, areaName, cuisines, cloudinaryImageId, avgRating, sla: { slaString } = {}, aggregatedDiscountInfoV3: { header = '', subHeader = '' } = {} } = props.restaurantData?.info;
   const userData = useContext(UserContext);
   return (
      <Link className="card-link" to={`/restaurant/${id}`}>
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
               <p>{userData.userName}</p>
            </div>
         </div>
      </Link>
   )
}

export default RestaurantCard;


export const withPromotedLable = function (RestaurantCard) {
   return (props) => {
      return (
         <div className="modifiedCard">
            <label className="label">VEG</label>
            <RestaurantCard {...props} />
         </div>
      )
   }
}

// Higher order Components
// Higher order Components take input a Component and return a modified version of it without disturbing its actual functionality (because its a pure function)