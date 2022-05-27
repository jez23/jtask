import React, { useContext } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search.js";
import Context from "../../contexts/Context";

function Header(props) {
  const { setSideBarState } = useContext(Context);
  return (
    <div className="header">
      <Logo />
      <Nav />
      <button className="mobile_nav" onClick={() => setSideBarState(true)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <Search />
    </div>
  );
}

export default Header;
