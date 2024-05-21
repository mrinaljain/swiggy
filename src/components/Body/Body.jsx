import React from "react";
import "./Body.css"
import RestaurentCard from "../RestaurentCard/RestaurentCard";
import restaurants from "../../utils/mockData";

const Body = function () {
   return (
      <div>
         <h3>Restaurants with online food delivery in Indore</h3>
         <div className="foodContainer">
            {restaurants.map((restaurant) => <RestaurentCard key={restaurant.id} restaurantData={restaurant} />)}

         </div>
      </div>
   );
}

export default Body;