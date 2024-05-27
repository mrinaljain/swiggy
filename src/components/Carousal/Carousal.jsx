import React, { useRef } from 'react';
// import './Carousel.css';

const Carousel = (props) => {


   return (
      <div className="">
         <h3 className='font-bold'>What's on your mind?</h3>
         <div className="flex overflow-x-auto">
               {props.restaurantList.map((restaurant, index) => (
                  <div key={index} className="min-w-36 mx-5">
                     <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant.imageId}`} alt={restaurant.imageId} />
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Carousel;
