import React from "react";
import "./Body.css"
import RestaurentCard from "../RestaurentCard/RestaurentCard";
import restaurants from "../../utils/mockData";

const Body = function () {
   const [restaurantList, setRestaurentList] = React.useState(restaurants);
   function filter(rating) {
      setRestaurentList((oldList) => {
         if (rating === 0) {
            return restaurants;
         }
         let list = restaurantList.filter((oldRestaurent) => oldRestaurent.info.avgRating >= rating);
         return list;
      });
   }
   return (
      <div>
         <h3>Restaurants with online food delivery in Indore</h3>
         <button onClick={() => filter(4.5)}> Top Rated </button>
         <button onClick={() => filter(4.4)}> 4.4 </button>
         <button onClick={() => filter(4.3)}> 4.3 </button>
         <button onClick={() => filter(4.2)}> 4.2 </button>
         <button onClick={() => filter(0)}> CLEAR </button>
         <div className="foodContainer">
            {restaurantList.map((restaurant) => <RestaurentCard key={restaurant.info.id} restaurantData={restaurant} />)}
         </div>
      </div>
   );
}

export default Body;