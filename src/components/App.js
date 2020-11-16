import React, { useContext } from 'react';
import '../css/main.css';
import Hub from './Hub';
import Context, { ConstProvider } from '../contexts/Context';




function App() {



/* console.log(66, sideBarState) */

  /* const [sideBarState, setSideBarState] = useState(false); */
/*   const [sideNavUserState, setSideNavUserState] = useState(false); */
  

  return (
      <div className="mainContainer">
      <ConstProvider>
          <Hub />
      </ConstProvider>
      </div>
   
  );
}

export default App;

