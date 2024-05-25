import React, { useEffect, useState } from "react";
import "./Body.css"
import RestaurentCard from "../RestaurentCard/RestaurentCard";
import restaurants from "../../utils/mockData";
import { GetRestaurents } from "../../utils/constants"

const Body = function () {
   const [restaurantList, setRestaurentList] = useState([]);
   useEffect(getdata, []);
   function getdata() {
      (async () => {
         let response = await fetch(GetRestaurents);
         let data = await response.json();
         console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setRestaurentList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      })();
   }
   function filter(rating) {
      setRestaurentList((oldList) => {
         if (rating === 0) {
            return restaurants;
         }
         let list = restaurantList.filter((oldRestaurent) => oldRestaurent.info.avgRating >= rating);
         return list;
      });
   }
   // TODO: Add shimmer effect here
   return (
      <div>
         <div className="button-container">
            <button className="filter" onClick={() => filter(4.5)}> Top Rated </button>
            <button className="filter" onClick={() => filter(4.4)}> 4.4 </button>
            <button className="filter" onClick={() => filter(4.3)}> 4.3 </button>
            <button className="filter" onClick={() => filter(4.2)}> 4.2 </button>
            <button className="filter clear" onClick={() => filter(0)}> CLEAR </button>
         </div>
         <h3>Restaurants with online food delivery in Indore</h3>
         <div className="foodContainer">
            {restaurantList.map((restaurant) => <RestaurentCard key={restaurant.info.id} restaurantData={restaurant} />)}
         </div>
      </div>
   );
}

export default Body;