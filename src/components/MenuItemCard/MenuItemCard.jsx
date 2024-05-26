import React from 'react';
import './MenuItemCard.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';
const MenuItemCard = (props) => {
   const { category, description, imageId, isBestseller, name, price, defaultPrice, ratings: { aggregatedRating: { rating, ratingCount, ratingCountV2 } } } = props.itemInfo;

   const dispatch = useDispatch();
   const handleAddItem = (item) => {
      dispatch(addItem(item));
   }
   return (
      <div className="menu-item-card">
         <div className="menu-item-content">
            <h3 className="menu-item-title">{name}</h3>
            <p className="menu-item-price">₹{price ? price / 100 : defaultPrice / 100}</p>
            <div className="menu-item-rating">
               <span className="rating-star">★</span>
               <span className="rating-value">{rating}</span>
               <span className="rating-count">({ratingCountV2})</span>
            </div>
            <p className="menu-item-description">
               {description}
               {/* <span className="more">more</span> */}
            </p>
         </div>
         <div className="menu-item-image-container">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="Chicken Biryani and Butter Chicken Meal" className="menu-item-image" />
            <button
               className="add-button"
               onClick={() => handleAddItem(props.itemInfo)}
            >ADD</button>
            <span className="customisable">Customisable</span>
         </div>
      </div>
   );
};

export default MenuItemCard;
