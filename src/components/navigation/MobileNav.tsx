import React, { useContext } from "react";
import Context from "../../contexts/Context";

const MobileNav: React.FC = () => {

    const { setDisplaySideBar } = useContext(Context);
    
    return(<div className="header__mobileNav">
    <button className="mobile_nav" onClick={() => setDisplaySideBar(true)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>   
    </div>)
}
export default MobileNav;
