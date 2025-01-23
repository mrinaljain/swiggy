import React from "react";
const DishCard = (props) => {
   const { name, category, description, imageId, isVeg, price, inStock, ratings: { aggregatedRating: { rating, ratingCount, ratingCountV2 } } } = props?.dish?.card?.card?.info;
   const { name: restaurantName, costForTwoMessage, } = props?.dish?.card?.card?.restaurant?.info
   return (
      <div className=" rounded-lg bg-gray-400 my-5 px-5 pt-5 max-w-96">
         <div className="flex justify-between">
            <div>
               <h6>{restaurantName}</h6>
               <span>{rating} . {"slaString"}</span>
            </div>
            <span>{"->"}</span>
         </div>
         <hr />
         <div className="flex justify-between">
            <div>
               <span> {isVeg ? "🟢" : "🔴"}</span>
               <h5 className="font-semibold">{name}</h5>
               <h4 className="font-thin">Rs {price / 100}</h4>
               <button className="border border-gray-200 rounded-lg px-3 py-0 cursor-pointer">{"More Details > "}</button>
            </div>
            <div>
               <img
                  className="rounded-md max-h-32"
                  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imageId} />
               <button
                  className="border border-green-200 shadow-md px-6 py-1  text-green-400 rounded-md">Add</button>
               <h6>Customisable</h6>
            </div>
         </div>
      </div>
   )
}

export default DishCard;