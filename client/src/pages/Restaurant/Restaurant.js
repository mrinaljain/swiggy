import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./Restaurant.css";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../../components/RestaurantCategory/RestaurantCategory";

function Restaurant() {
  // Used to get the dynamic routing paramaters
  const params = useParams();
  let restaurantId = params.id;
  const restaurentInfo = useRestaurantMenu(restaurantId);
  const [activeIndex, setActiveIndex] = useState(0);
  //! list items category wise
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[X].card.card.@type.includes("ItemCategory") [object]
  // iski itemCards array pr loop krna hai
  // iska title print krna hai
  function handleAccordion(clickedIndex) {
    setActiveIndex((oldActiveIndex) => {
      if (oldActiveIndex === clickedIndex) {
        return -1;
      } else {
        return clickedIndex;
      }
    });
  }
  if (restaurentInfo === null) {
    return;
    <h1>Loading ......</h1>;
  } else {
    const { name, avgRating, cuisines } =
      restaurentInfo?.data?.cards[2]?.card?.card?.info;
    let categories =
      restaurentInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    categories = categories.filter((category) =>
      category.card.card["@type"].includes("ItemCategory")
    );
    // console.log("categories", categories);
    return (
      <div className="w-4/6 m-auto" data-testid="respage">
        <h2 className="text-[24px] font-bold">{"Name"}</h2>
        <div className=" w-full border border-solid rounded-lg shadow-xl p-4">
          <div className="details">
            <span className="rating">
              {avgRating}
              <span>({"(1 + ratings)"})</span>
            </span>
            <span className="cost">₹{350} for two</span>
            <p className="cuisines">{cuisines.join(",")}</p>
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
        <div className="my-12">
          {categories?.map((cat, index) => (
            <RestaurantCategory
              key={index}
              category={cat}
              isVisible={activeIndex === index ? true : false}
              cardClick={handleAccordion}
              ind={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Restaurant;
// TODO create nice UI
