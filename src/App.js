// App.js
import React from 'react';
import PositionHeader from './components/PositionHeader.js';
import PositionDetails from './components/PositionDetail.js';
import ActionButtons from './components/ActionButtons.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className='flex flex-col p-8' style={{background: "#1c2431"}}>
          <PositionHeader />
          <PositionDetails />
          <ActionButtons />
        </div>

    </div>
  );
};

export default App;
