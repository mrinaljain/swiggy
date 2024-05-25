import React, { useRef } from 'react';
import './Carousel.css';

const Carousel = (props) => {


   return (
      <div className="carousel-container">
         <h3>What's on your mind?</h3>
         <div className="carousel-wrapper">
            <div className="carousel">
               {props.restaurantList.map((restaurant, index) => (
                  <div key={index} className="carousel-item">
                     <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant.imageId}`} alt={restaurant.imageId} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Carousel;
