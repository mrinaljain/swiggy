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
      <Link to={`/restaurant/${id}`}>
         <div
            data-testid="rescard"
            className={`p-3 w-56 bg-orange-50 rounded-md transform ease-in duration-200 hover:scale-95 cursor-pointer  ${name}`}
         >
            <div className="relative drop-shadow-md">
               <img
                  className="rounded-md max-h-32 w-full object-cover"
                  src={CDN_URL + cloudinaryImageId}
                  alt={name} />
               <div
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-2 py-1 "
               >
                  <span>{header + subHeader}</span>
               </div>
            </div>
            <div className="card-details">
               <h3 className="font-bold py-2 text text-lg line-clamp-1 overflow-hidden">{name}</h3>
               <p>⭐ {avgRating} • {slaString}</p>
               <p className="line-clamp-1">{cuisines.join(",")}</p>
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
            <label className="absolute z-10 bg-green-400 text-white px-2 py-0 rounded-sm font-semibold">VEG</label>
            <RestaurantCard {...props} />
         </div>
      )
   }
}

// Higher order Components
// Higher order Components take input a Component and return a modified version of it without disturbing its actual functionality (because its a pure function)