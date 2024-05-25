import React from "react";
import "./Header.css"
import { AppLogo } from "../../utils/constants";
import YourSvg from '../../assets/svg/swiggy.svg';

export const Header = function () {
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
               <li><a href="#sign-in">Sign In</a></li>
            </ul>
         </nav>
         <div className="search-bar">
            <input type="text" placeholder="Search for restaurants or dishes" />
         </div>
         <div className="profile">
            <img src="profile-icon-url-here.png" alt="Profile" />
         </div>
      </header>
   );
}

