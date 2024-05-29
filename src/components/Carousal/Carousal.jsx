import React, { useRef } from 'react';
import { CDN_URL } from '../../utils/constants';
// import './Carousel.css';

const Carousel = (props) => {
   const scrollContainer = useRef(null);
   const next = () => {
      if (scrollContainer.current) {
         scrollContainer.current.scrollBy({
            left: -250,
            behavior: 'smooth'
         });
      }
   }
   const prev = () => {
      if (scrollContainer.current) {
         scrollContainer.current.scrollBy({
            left: 250,
            behavior: 'smooth'
         });
      }
   }
   return (
      < div className="mt-5" >
         <div className='flex justify-between'>
            <h3 className='font-bold'>What's on your mind?</h3>
            <div>
               <button
                  className="rounded-full bg-gray-300 w-7 h-7 text-black mx-2"
                  onClick={next}
               >&#8592;</button>
               <button
                  className="rounded-full bg-gray-300 w-7 h-7 text-black mx-2"
                  onClick={prev}>&#8594;</button>
            </div>
         </div>

         <div
            className="flex overflow-x-auto scroll-smooth no-scrollbar"
            ref={scrollContainer}>
            {props.restaurantList.map((restaurant, index) => (
               <div key={index} className="min-w-32 mx-4">
                  <img src={CDN_URL + restaurant.imageId} alt={restaurant.imageId} />
               </div>
            ))}
         </div>
      </div >
   );
} 

export default Carousel;
