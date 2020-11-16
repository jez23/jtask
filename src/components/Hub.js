import React, { useState, useContext } from 'react';
import Context from '../contexts/Context';
import SideNav from './SideNav';
import Dashboard from './Dashboard';


const Hub = () => {
   
    const { sideBarState } = useContext(Context);

    /* console.log(66, sideBarState) */
  const [onHoldState, setOnHoldState] = useState(false);
  const [backLogState, setBackLogState] = useState(false);
  /* const [sideBarState, setSideBarState] = useState(false); */
/*   const [sideNavUserState, setSideNavUserState] = useState(false); */


    return (
        <>
             { sideBarState &&
         <SideNav 
              setOnHoldState={setOnHoldState}
              setBackLogState={setBackLogState}/>
       }

          <Dashboard
         /*    setUserFunction={setUserFunction} */
         
            onHoldState={onHoldState}
            setOnHoldState={setOnHoldState}
            backLogState={backLogState}
            setBackLogState={setBackLogState}
          />
        </>
    )
}

export default Hub;