import React from 'react';
import './NoInternet.css';

const NoInternet = () => {
   return (
      <div className="no-internet-container">
         <div className="no-internet-content">
            <img
               src="https://via.placeholder.com/150"
               alt="No Internet"
               className="no-internet-image"
            />
            <h1>Oops! No Internet Connection</h1>
            <p>Please check your network settings and try again.</p>
            <button onClick={() => window.location.reload()} className="retry-button">
               Retry
            </button>
         </div>
      </div>
   );
};

export default NoInternet;
