import React, { useContext } from 'react';
import Context from '../contexts/Context';
import { Link } from 'react-router-dom'; 

function TopNav(props){

    const { setSideBarState } = useContext(Context);
  
    return (
        <>
            <div className="mobileHamburger">
                 <i className="fa fa-bars menuMobile" aria-hidden="true" onClick={() => setSideBarState(true)}></i>
             </div>
             <div className="navButtons">
                <Link to='/' className="navButton">Dashboard</Link>
                <Link to='/newticket' className="navButton">New Ticket</Link>
                <Link to='/onholdtickets' className="navButton">On Hold</Link>
                <Link to='/backlog' className="navButton">Backlog</Link>
                <Link to='/users' className="navButton">Users</Link>
            </div>
        </>

    )
}

export default TopNav;