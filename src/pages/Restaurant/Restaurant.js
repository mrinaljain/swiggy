import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Restaurant.css";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

function Restaurant() {
  // Used to get the dynamic routing paramaters
  const params = useParams();
  let restaurantId = params.id;
  const restaurentInfo = useRestaurantMenu(restaurantId);

  if (restaurentInfo === null) {
    return;
    <h1>Loading ......</h1>;
  } else {
    const { name, avgRating, cuisines } =
      restaurentInfo?.cards[2]?.card?.card?.info;

    return (
      <>
        <div className="restaurant-card">
          <h2>{name}</h2>
          <div className="details">
            <span className="rating">
              {avgRating}
              <span>({"(1 + ratings)"})</span>
            </span>
            <span className="cost">₹{350} for two</span>
            <span className="cuisines">{cuisines.join(",")}</span>
            <div className="location-time">
              <span className="location">Outlet: {"Kalani Nagar"}</span>
              <span className="delivery-time">{"20 - 25 min"}</span>
            </div>
            <div className="distance-fee">
              <span className="distance">{"2.2 Kms"}</span>
              <span className="fee">₹{"31"} Delivery fee will apply</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Restaurant;
// TODO create nice UI
