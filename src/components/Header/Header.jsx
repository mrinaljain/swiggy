import React, { useState } from "react";
import "./Header.css"
import { AppLogo } from "../../utils/constants";
import YourSvg from '../../assets/svg/swiggy.svg';

export const Header = function () {
   const [authStatus, setAuthStatus] = useState(true);
   function handleAuth() {
      setAuthStatus((oldStatus) => !oldStatus);
   }
   console.log("Header Rendered");
   return (
      <header className="header">
         <div className="logo">
            <img src={AppLogo} alt="Swiggy Logo" />
         </div>
         <nav className="nav">
            <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#offers">Offers</a></li>
               <li><a href="#help">Help</a></li>
               <li><button onClick={handleAuth}> {authStatus ? "Sign Out" : "Sign In"}</button></li>
            </ul>
         </nav>

         <div className="profile">
            <img src="profile-icon-url-here.png" alt="Profile" />
         </div>
      </header>
   );
}

