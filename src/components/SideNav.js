import React, { useContext } from 'react';
import Context from '../contexts/Context';

function SideNav(props) {
    const { setSideBarState, setSideNavUserState } = useContext(Context);

    function showUserModal(){
        setSideBarState(false);
        setSideNavUserState(true);
    }
    function showOnHoldModal(){
        setSideBarState(false);
        props.setOnHoldState(true);
    }
    function showBackLog(){
        setSideBarState(false);
        props.setBackLogState(true)
    }
    return (
        <div className="sideNavContainer" onClick={() => setSideBarState(false)}>
            <div className="sideNavInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="sideNav">
                    <div className="sideNavClose">
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => setSideBarState(false)}></i>
                    
                    </div>
                    <button className="sideNav__button" onClick={() => setSideBarState(false)}>Dash Board</button>
                    <button className="sideNav__button" onClick={() => showUserModal()}>User</button>
                    <button className="sideNav__button" onClick={() => showOnHoldModal()}>On Hold</button>
                    <button className="sideNav__button" onClick={() => showBackLog()}>Back Log</button>          
                </div>
            </div>
        </div>
    );
  }
  
  export default SideNav;