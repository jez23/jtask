import React from 'react';
import Logo from './Logo';
import TopNav from './TopNav';
import SearchWidget from './SearchWidget.js';


function Header(props){

    return (
        <div className="header">
             <div className="header__logo">
                <Logo />
            </div>
            <div className="header__topNav">
                <TopNav />
            </div>
            <div className="header__search">
                <SearchWidget />
            </div>
        </div>
    )
}

export default Header;