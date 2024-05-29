import React, { useState } from "react";
// import "./Body.css"
import RestaurantCard, { withPromotedLable } from "./RestaurantCard/RestaurantCard";
import Carousel from "./Carousal/Carousal";
import useRestaurantList from "../utils/useRestaurantList";
import Shimmer from "./Shimmer/Shimmer";

const Body = function () {
   let restaurantData = useRestaurantList();

   const [searchKeyword, setsearchKeyword] = useState("");
   const [filter, setFilter] = useState(false);
   function handleFilter() {
      setFilter(true);
   }
   function clearFilter() {
      setFilter(false);
   }
   function handleSearch(e) {
      let searchText = e.target.value;
      setsearchKeyword(searchText);
   }
   if (restaurantData === null) {
      return <Shimmer />
   } else {
      const { cards } = restaurantData.data;
      let restaurantList = cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      let topRestaurantList = cards[0].card.card.imageGridCards.info;

      let restaurantCardsList = filter ? restaurantList.filter((oldRestaurent) => oldRestaurent.info.avgRating >= 4.5) : searchKeyword.length > 0
         ? restaurantList
            .filter((restaurant) =>
               restaurant.info.name.toLowerCase().includes(searchKeyword.toLowerCase())
            )
         : restaurantList;
      const UpdatedCard = withPromotedLable(RestaurantCard);
      return (
         <div className="body w-5/6  mx-auto">

            {topRestaurantList.length && <Carousel restaurantList={topRestaurantList} />}
            <div className="flex items-center">
               <div className="my-4 mr-4 py-4 ">
                  <input
                     className="border border-solid border-black w-80 py-2 px-4 rounded-lg"
                     type="text"
                     placeholder="Search for restaurants or dishes"
                     onChange={handleSearch}
                     value={searchKeyword}
                     name="searchInput"
                  />
               </div>
               <button
                  className="py-2 px-4 bg-gray-100 rounded-lg"
                  onClick={handleFilter}
                  name="filter"
               >Top Rated</button>
               <button
                  className="py-2 px-4 mx-2 bg-red-100 rounded-lg"
                  onClick={clearFilter}
                  name="clear"
               > CLEAR </button>
            </div>
            <h3 className="font-bold">Restaurants with online food delivery in Indore</h3>
            <div className="flex flex-wrap justify-center gap-3">
               {restaurantCardsList.map((restaurant) => {
                  return restaurant?.info?.veg ?
                     <UpdatedCard key={restaurant.info.id} restaurantData={restaurant} />
                     :
                     <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
               })}
            </div>
         </div>
      );
   }

}

export default Body;

// TODO : build lazy scroll on this page