import React, { Component } from 'react';

import GameWindow from './GameWindow';
import GameSidebar from './GameSidebar';

class MainApp extends Component {
  render() {        
    return (    
      <div className='app-content'>
        <GameWindow />
        <GameSidebar />
      </div>
    );
  }
};

export default MainApp;
