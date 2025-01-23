import React, { useState, useContext } from "react";
// import "./Header.css"
import { AppLogo } from "../../utils/constants";
import { Link } from "react-router-dom";
import useConnectivity from "../../utils/useConnectivity";
import UserContext from "../../utils/UserContext";
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
      <header className="flex justify-between items-center shadow-lg px-10">
         <div className="logo">
            <img className="w-16" src={AppLogo} alt="Swiggy Logo" />
         </div>
         <nav className="flex items-center">
            <ul className="flex p-4 m-2">
               <li className="px-4">{connectionStatus ? "Online" : "Offline"} </li>
               <li className="px-4"><Link to="">Home</Link></li>
               <li className="px-4"><Link to="/search">Search</Link></li>
               <li className="px-4"><Link to="/contact">Contact</Link></li>
               <li className="px-4"><Link to="/about">About</Link></li>
               {authStatus && <li className="px-4">
                  <Link to="/cart">Cart {cartItems.length} Items</Link> 
               </li>}
               <li className="px-4">
                  <button
                     onClick={handleAuth}
                     aria-label="login"
                  >
                     {authStatus ? "Sign Out" : "Sign In"}
                  </button>
               </li>
               {<li>
                  <Link to={"/profile/" + userData.userFullName}>
                  <div className="flex items-center">
                        <span>{userData.userFullName}</span>
                        <img className="rounded-full w-6 ml-2" src={userData.userImage} />
                     </div> 
                  </Link>
               </li>}
            </ul>
         </nav>

      </header>
   )
}
export default Header;

