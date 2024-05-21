import React from "react";
import "./Header.css"
import { AppLogo } from "../../utils/constants";

const Header = function () {
   return (
      <header className="appHeader">
         <img className="appLogo" src={AppLogo} />
         <nav className="appNav">
            <a className="navItem" href="">About</a>
            <a className="navItem" href="">About</a>
            <a className="navItem" href="">About</a>
            <a className="navItem" href="">About</a>
         </nav>
      </header>
   );
}

export default Header;