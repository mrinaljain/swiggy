import { useState, useEffect } from "react";
import { GetRestaurants } from "./constants";

export default useRestaurantList = () => {
   const [restaurantList, setRestaurentList] = useState([]);

   useEffect(getdata, []);
   function getdata() {
      (async () => {
         let response = await fetch(GetRestaurants);
         let data = await response.json();
         setRestaurentList(data?.data?.cards);
      })();
   }
   return restaurantList;
}