import { useEffect, useState } from "react"
import { GetRestaurants, LAT, LONG } from "./constants";

const useUpdatedResList = (shouldCall) => {
   const [updatedResList, setUpdatedResList] = useState([]);
   // function getUpdatedRestaurents() {
   //    (async () => {
   //       if (shouldCall) {
   //          console.log(shouldCall, "API CAll Happenng");
   //          const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
   //             method: "POST",
   //             body: {
   //                "lat": "22.71700",
   //                "lng": "75.83370",
   //                "nextOffset": "COVCELQ4KIDA4O25n72AVTCnEzgC",
   //                "widgetOffset": {
   //                   "NewListingView_category_bar_chicletranking_TwoRows": "",
   //                   "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
   //                   "Restaurant_Group_WebView_SEO_PB_Theme": "",
   //                   "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
   //                   "inlineFacetFilter": "",
   //                   "restaurantCountWidget": ""
   //                },
   //                "filters": {},
   //                "seoParams": {
   //                   "seoUrl": "https://www.swiggy.com/",
   //                   "pageType": "FOOD_HOMEPAGE",
   //                   "apiName": "FoodHomePage"
   //                },
   //                "page_type": "DESKTOP_WEB_LISTING",
   //                "_csrf": "xBSzB3OPjIIe-E4VtYnr-lChTwufTIE82F4sdf4g"
   //             }
   //          });
   //          const data = await res.json();
   //          console.log(data);
   //          setUpdatedResList(data);
   //       }
   //    })();
   // }
   // useEffect(getUpdatedRestaurents, [shouldCall]);

   function getdata() {
      if (shouldCall) {
         console.log(shouldCall, "API CAll Happenng");
         (async () => {
            let response = await fetch(GetRestaurants);
            let data = await response.json();
            // setRestaurentList(data?.data?.cards);
            console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setUpdatedResList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         })();
      }
   }
   useEffect(getdata, [shouldCall]);
   return updatedResList;
}

export default useUpdatedResList;