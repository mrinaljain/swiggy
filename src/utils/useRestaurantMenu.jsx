import { useEffect, useState } from "react";
import { GetRestaurantsMenu } from "./constants";

// Custom hook
const useRestaurantMenu = function (resId) {
   const [resInfo, setResInfo] = useState(null);
   const getRestaurentDetails = async () => {
      const data = await fetch(`${GetRestaurantsMenu}${resId}`);
      const json = await data.json();
      setResInfo(json.data);
   }
   useEffect(() => { getRestaurentDetails(); }, []);
   return resInfo;
}

export default useRestaurantMenu;