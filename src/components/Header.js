import React from 'react';
import Logo from './Logo';
import TopNav from './TopNav';

function Header(props){
    return (
        <div className="header">
            <div className="header__topNav">
                <TopNav 
                    setSideBarState={props.setSideBarState}/>
            </div>
            <div className="header__logo">
                <Logo />
            </div>
        </div>
    )
}

export default Header;