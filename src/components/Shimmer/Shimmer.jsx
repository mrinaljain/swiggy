import React from 'react';
import './Shimmer.css';

const ShimmerCard = () => {
   return (
      <div className="shimmer-card">
         <div className="shimmer-image"></div>
         <div className="shimmer-line"></div>
         <div className="shimmer-line short"></div>
      </div>
   );
};

const Shimmer = () => {
   return (
      <div className="shimmer-container">
         <ShimmerCard />
         <ShimmerCard />
         <ShimmerCard />
         <ShimmerCard />
         <ShimmerCard />
      </div>
   );
};

export default Shimmer;
