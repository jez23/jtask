import React, { useContext } from 'react';
import Context from '../contexts/Context';

function TopNav(props){

    const { setSideBarState } = useContext(Context);
  
    return (
        <i className="fa fa-bars menuMobile" aria-hidden="true" onClick={() => setSideBarState(true)}></i>
    )
}

export default TopNav;