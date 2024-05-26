import React, { useState } from "react";
import "./Header.css"
import { AppLogo } from "../../utils/constants";
import { Link } from "react-router-dom";
import useConnectivity from "../../utils/useConnectivity";

const Header = function () {
   const [authStatus, setAuthStatus] = useState(true);
   function handleAuth() {
      setAuthStatus((oldStatus) => !oldStatus);
   }
   let connectionStatus = useConnectivity();
   return (
      <header className="header">
         <div className="logo">
            <img src={AppLogo} alt="Swiggy Logo" />
         </div>
         <nav className="nav">
            <ul>
               <li>{connectionStatus ? "Connected" : "Not Connected"} </li>
               <li><Link to="">Home</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/cart">Cart</Link></li>
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

