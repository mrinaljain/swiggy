import React, { useEffect, useState } from "react";
import "./Body.css"
import RestaurentCard from "../RestaurentCard/RestaurentCard";
import restaurants from "../../utils/mockData";
import { GetRestaurents } from "../../utils/constants"
import Carousel from "../Carousal/Carousal";

const Body = function () {
   console.log("Body Rendered");
   const [restaurantList, setRestaurentList] = useState([]);
   const [topRestaurantList, setTopRestaurentList] = useState([]);
   const [searchKeyword, setsearchKeyword] = useState("");
   //! useEffect
   // if no dependency Array then useEffect is called on every render
   // if Empty dependency Array then useEffect is called only once
   // if dependency Array value exists then useEffect is called everytime value changes
   useEffect(getdata, []);
   function getdata() {
      (async () => {
         let response = await fetch(GetRestaurents);
         let data = await response.json();
         setTopRestaurentList(data?.data?.cards[0].card.card.imageGridCards.info);
         console.log(data?.data?.cards[0].card.card.imageGridCards.info);
         setRestaurentList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      })();
   }
   function filter(rating) {
      setRestaurentList((oldList) => {
         if (rating === 0) {
            return restaurants;
         }
         let list = restaurantList.filter((oldRestaurent) => oldRestaurent.info.avgRating >= rating);
         return list;
      });
   }
   function handleSearch(e) {
      let searchText = e.target.value;
      setsearchKeyword(searchText);
   }
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



   // TODO: Add shimmer effect here
   return (
      <div>
         <div className="button-container">
            <div className="search-bar">
               <input type="search"
                  placeholder="Search for restaurants or dishes"
                  onChange={handleSearch}
                  value={searchKeyword}
               />
            </div>
            <button className="filter" onClick={() => filter(4.5)}> Top Rated </button>
            <button className="filter" onClick={() => filter(4.4)}> 4.4 </button>
            <button className="filter" onClick={() => filter(4.3)}> 4.3 </button>
            <button className="filter" onClick={() => filter(4.2)}> 4.2 </button>
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

export default Body;

// TODO : build lazy scroll on this page