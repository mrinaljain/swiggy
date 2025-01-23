import { useState, useEffect } from "react";
import { GetRestaurants } from "./constants";

const useRestaurantList = () => {
   const [restaurantList, setRestaurentList] = useState(null);

   useEffect(getdata, []);
   function getdata() {
      (async () => {
         let response = await fetch(GetRestaurants);
         let data = await response.json();
         setRestaurentList(data);
      })();
   }
   return restaurantList;
}
export default useRestaurantList;