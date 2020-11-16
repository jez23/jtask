import React from 'react';

import '../css/main.css';
import Hub from './Hub';
import { ConstProvider } from '../contexts/Context';


function App() {
  return (
      <div className="mainContainer">
      <ConstProvider>
          <Hub />
      </ConstProvider>
      </div>
   
  );
}

export default App;

