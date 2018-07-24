import React from 'react';
import GameWindow from './GameWindow';
import GameSidebar from './GameSidebar';

const GameApp = () => {
  return (
    <div className='app-content'>
      <GameWindow />
      <GameSidebar />
    </div>
  )
};

export default GameApp;
