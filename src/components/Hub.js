import React, { useContext } from 'react';
import Context from '../contexts/Context';
import SideNav from './SideNav';
import Dashboard from './Dashboard';


const Hub = () => {
   
    const { sideBarState } = useContext(Context);

    return (
        <>
             { sideBarState &&
         <SideNav />
       }
          <Dashboard/>
        </>
    )
}

export default Hub;