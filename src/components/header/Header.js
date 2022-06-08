import React from "react";
import Logo from "./Logo";
import Nav from "../navigation/Nav";
import Search from "./Search.js";
import Account from "./Account";
import MobileNav from "../navigation/MobileNav";

const Header = () => {
  
  return (
    <div className="header">
    <div className="header__meta"> 
     <Search />
     <Logo />
     <Account />
     <MobileNav />
    </div>
     <div className="navigation">
     <Nav />
     </div>
    </div>
  );
}

export default Header;
