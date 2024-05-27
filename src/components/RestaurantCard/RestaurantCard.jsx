import React from "react";
// import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
   // ! nested Destructuring
   const {
      id,
      name,
      areaName,
      cuisines,
      cloudinaryImageId,
      avgRating,
      sla: { slaString } = {},
      aggregatedDiscountInfoV3: { header = '', subHeader = '' } = {}
   } = props.restaurantData?.info;
   return (
      <Link className="card-link " to={`/restaurant/${id}`}>
         <div className="card m-2 p-3 w-[230px] bg-orange-50 rounded-md transform ease-in duration-200 hover:scale-95 cursor-pointer">
            <div className="relative drop-shadow-md">
               <img className="rounded-md" src={CDN_URL + cloudinaryImageId} alt={name} />
               <div className="absolute bottom-0 bg-black-900 text-white px-2 py-1"
               >{`${header} ${subHeader}`}
               </div>
            </div>
            <div className="card-details">
               <h3 className="font-bold py-4 text text-lg">{name}</h3>
               <p>⭐ {avgRating} • {slaString}</p>
               <p className="cusine">{cuisines.join(",")}</p>
               <p>{areaName}</p>
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