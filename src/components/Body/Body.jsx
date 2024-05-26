import React, { useState } from "react";
import "./Body.css"
import RestaurentCard from "../RestaurentCard/RestaurentCard";
import Carousel from "../Carousal/Carousal";
import useRestaurantList from "../../utils/useRestaurantList";
import Shimmer from "../Shimmer/Shimmer";

const Body = function () {
   console.log("Body Rendered");
   let restaurantData = useRestaurantList();
   const [searchKeyword, setsearchKeyword] = useState("");
   function filter(rating) {
      //TODO Fix filter logic here as UI is not updating
      // restaurantData = restaurantData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((oldRestaurent) => oldRestaurent.info.avgRating >= rating);
      // console.log(restaurantData);
   }
   function handleSearch(e) {
      let searchText = e.target.value;
      setsearchKeyword(searchText);
   }
   if (restaurantData.length === 0) {
      return <Shimmer />
   } else {
      let restaurantList = restaurantData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      let topRestaurantList = restaurantData[0].card.card.imageGridCards.info;

   let restaurantCards = searchKeyword.length > 0
      ? restaurantList
         .filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchKeyword.toLowerCase())
         )
         .map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} restaurantData={restaurant} />
         ))
      : restaurantList
         .map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} restaurantData={restaurant} />
         ));
      return (
         <div className="test">
            <div className="button-container">
               <div className="search-bar">
                  <input type="search"
                     placeholder="Search for restaurants or dishes"
                     onChange={handleSearch}
                     value={searchKeyword}
                  />
               </div>
               <button className="filter" onClick={() => filter(4.5)}> Top Rated </button>
               <button className="filter clear" onClick={() => filter(0)}> CLEAR </button>
            </div>
            {topRestaurantList.length && <Carousel restaurantList={topRestaurantList} />}
            <h3>Restaurants with online food delivery in Indore</h3>
            <div className="foodContainer">
               {restaurantCards}
            </div>
         </div>
      );
   }

}

export default Body;

// TODO : build lazy scroll on this page