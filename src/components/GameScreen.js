import React, { Component } from 'react';

import ActionWindow from './ActionWindow';
import GameSidebar from './GameSidebar';

class GameScreen extends Component {
  render() {        
    return (    
      <div className='app-content'>
        <div className='game-screen'>
          <ActionWindow />
          <GameSidebar />
        </div>
      </div>
    );
  }
};

export default GameScreen;
