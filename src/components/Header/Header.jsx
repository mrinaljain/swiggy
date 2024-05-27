import React, { useState, useContext } from "react";
// import "./Header.css"
import { AppLogo } from "../../utils/constants";
import { Link } from "react-router-dom";
import useConnectivity from "../../utils/useConnectivity";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = function () {
   const [authStatus, setAuthStatus] = useState(true);
   const userData = useContext(UserContext);
   const cartItems = useSelector((store) => store.cart.items);
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
               <li><Link to="/cart">Cart</Link> {cartItems.length}</li>
            </ul>
         </nav>
         <div className="profile">
            <img src={userData.userImage} />
            {userData.userName}
            <button
               onClick={handleAuth}>
               {authStatus ? "Sign Out" : "Sign In"}
            </button>
         </div>
      </header>
   )
}
export default Header;

