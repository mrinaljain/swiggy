import { useState, useEffect } from "react";
import { GetRestaurants } from "./constants";

export default useRestaurantList = () => {
   const [restaurantList, setRestaurentList] = useState([]);

   useEffect(getdata, []);
   function getdata() {
      (async () => {
         let response = await fetch(GetRestaurants);
         let data = await response.json();
         // setTopRestaurentList(data?.data?.cards[0].card.card.imageGridCards.info);
         console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         // setRestaurentList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setRestaurentList(data?.data?.cards);
      })();
   }

   return restaurantList;
}