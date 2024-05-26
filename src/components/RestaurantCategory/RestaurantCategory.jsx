import React from "react";
import MenuItemCard from "../MenuItemCard/MenuItemCard";

function RestaurantCategory(params) {
   const { category, isVisible, cardClick, ind } = params;
   return (<div key={category?.card?.card?.index} className="accordion">
      <h2 className="accordion-header"
         onClick={() => cardClick(ind)}>
         {category?.card?.card.title} (
         {category?.card?.card?.itemCards?.length})
      </h2>
      {isVisible && <div className="accordion-body">
         {category?.card?.card?.itemCards.map((item) => (
            <MenuItemCard
               key={item?.card?.info?.id}
               itemInfo={item?.card?.info}
            />
         ))}
      </div>}

   </div>)
      ;
}

export default RestaurantCategory;