import { useEffect, useState } from "react";
import { GetRestaurantsMenu } from "./constants";

// Custom hook
const useRestaurantMenu = function (resId) {
   const [resInfo, setResInfo] = useState(null);
   const getRestaurentDetails = async () => {
      const res = await fetch(`${GetRestaurantsMenu}${resId}`);
      const data = await res.json();
      setResInfo(data);
   }
   useEffect(() => { getRestaurentDetails(); }, []);
   return resInfo;
}

export default useRestaurantMenu;