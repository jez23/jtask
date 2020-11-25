import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../contexts/Context';


function SideNav(props) {
    const { setSideBarState,
            /* setSideNavUserState,
            setOnHoldState,
            setBackLogState */} = useContext(Context);

  /*   function showUserModal(){
        setSideBarState(false);
        setSideNavUserState(true);
    }
    function showOnHoldModal(){
        setSideBarState(false);
        setOnHoldState(true);
    }
    function showBackLog(){
        setSideBarState(false);
        setBackLogState(true)
    } */
    return (
        <div className="sideNavContainer" onClick={() => setSideBarState(false)}>
            <div className="sideNavInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="sideNav">
                    <div className="sideNavClose">
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => setSideBarState(false)}></i>
                    
                    </div>

            <Link to='/' className="sideNav__button">Dashboard</Link>
            <Link to='/newticket' className="sideNav__button">New Ticket</Link>
            <Link to='/onholdtickets' className="sideNav__button">On Hold</Link>
            <Link to='/backlog' className="sideNav__button">Backlog</Link>
            <Link to='/users' className="sideNav__button">Users</Link>


                  {/*   <button className="sideNav__button" onClick={() => setSideBarState(false)}>Dash Board</button>
                    <button className="sideNav__button" onClick={() => showUserModal()}>User</button>
                    <button className="sideNav__button" onClick={() => showOnHoldModal()}>On Hold</button>
                    <button className="sideNav__button" onClick={() => showBackLog()}>Back Log</button>           */}
                </div>
            </div>
        </div>
    );
  }
  
  export default SideNav;