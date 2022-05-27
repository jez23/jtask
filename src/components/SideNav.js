import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

import Context from '../contexts/Context';


function SideNav(props) {
    const { setSideBarState, sideBarState } = useContext(Context);

    return ReactDOM.createPortal(
<>
       {sideBarState &&  <div className="sideNavContainer" onClick={() => setSideBarState(false)}>
            <div className="sideNavInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="sideNav">
                    <div className="sideNavClose">
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => setSideBarState(false)}></i>
                    
                    </div>

            <Link to='/' onClick={() => setSideBarState(false)}>
                <button className='btn'>Dashboard</button>
            </Link>
            <Link to='/newticket' onClick={() => setSideBarState(false)}>
                <button className='btn'>New Ticket</button>
            </Link>
            <Link to='/onholdtickets' onClick={() => setSideBarState(false)}>
                <button className='btn'>On Hold</button>
            </Link>
            <Link to='/backlog' onClick={() => setSideBarState(false)}>
                <button className='btn'>Backlog</button>
            </Link>
            <Link to='/users' onClick={() => setSideBarState(false)}>
                <button className='btn'>Users</button>
            </Link>


                 
                </div>
            </div>
        </div>}
        </>
     , document.getElementById("mobile_nav"));
  }
  
  export default SideNav;