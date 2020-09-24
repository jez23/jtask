import React from 'react';

function TopNav(props){
  
    return (
        <i className="fa fa-bars menuMobile" aria-hidden="true" onClick={() => props.setSideBarState(true)}></i>
    )
}

export default TopNav;