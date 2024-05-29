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
            <div className="relative drop-shadow-md rounded-lg">
               <img
                  className="rounded-lg max-h-36 w-full object-cover"
                  src={CDN_URL + cloudinaryImageId}
                  alt={name} />
               <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black-500 text-white px-2 pt-3 pb-1 rounded-lg "
               >
                  <span className="font-bold">{header + subHeader}</span>
               </div>
            </div>
            <div className="card-details">
               <h3 className="font-bold pt-3 text text-lg line-clamp-1 overflow-hidden">{name}</h3>
               <p className="font-semibold text-green">⭐️ {avgRating} • {slaString}</p>
               <p className="line-clamp-1 text-gray-600">{cuisines.join(",")}</p>
               <p className="text-gray-500">{areaName}</p>
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