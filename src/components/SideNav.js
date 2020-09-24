import React from 'react';

function SideNav(props) {
   
    function showUserModal(){
        props.setSideBarState(false);
        props.setSideNavUserState(true);
    }
    function showOnHoldModal(){
        props.setSideBarState(false);
        props.setOnHoldState(true);
    }
    function showBackLog(){
        props.setSideBarState(false);
        props.setBackLogState(true)
    }
    return (
        <div className="sideNavContainer" onClick={() => props.setSideBarState(false)}>
            <div className="sideNavInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="sideNav">
                    <div className="sideNavClose">
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => props.setSideBarState(false)}></i>
                    
                    </div>
                    <button className="sideNav__button" onClick={() => props.setSideBarState(false)}>Dash Board</button>
                    <button className="sideNav__button" onClick={() => showUserModal()}>User</button>
                    <button className="sideNav__button" onClick={() => showOnHoldModal()}>On Hold</button>
                    <button className="sideNav__button" onClick={() => showBackLog()}>Back Log</button>          
                </div>
            </div>
        </div>
    );
  }
  
  export default SideNav;