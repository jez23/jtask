import React, { useContext } from 'react';
import Context from '../contexts/Context';
import { BrowserRouter } from 'react-router-dom';

import SideNav from './SideNav';
import Dashboard from './Dashboard';



const Hub = () => {
   
    const { sideBarState } = useContext(Context);

    return (
        <BrowserRouter >
             { sideBarState &&
            <SideNav />
            }    
            <Dashboard/>
        </BrowserRouter>
    )
}

export default Hub;