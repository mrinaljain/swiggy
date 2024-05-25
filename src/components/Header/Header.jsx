import React, { useState } from "react";
import "./Header.css"
import { AppLogo } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = function () {
   const [authStatus, setAuthStatus] = useState(true);
   function handleAuth() {
      setAuthStatus((oldStatus) => !oldStatus);
   }
   return (
      <header className="header">
         <div className="logo">
            <img src={AppLogo} alt="Swiggy Logo" />
         </div>
         <nav className="nav">
            <ul>
               <li><Link to="">Home</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/about">About</Link></li>
            </ul>
         </nav>
         <div className="profile">
            <img src="profile-icon-url-here.png" alt="Profile" />
            <button
               onClick={handleAuth}>
               {authStatus ? "Sign Out" : "Sign In"}
            </button>
         </div>
      </header>
   )
}
export default Header;

