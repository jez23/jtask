import React from "react";
import logo from "../../img/JTaskLogo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="JTask Logo" />
      </Link>
    </div>
  );
}

export default Logo;
