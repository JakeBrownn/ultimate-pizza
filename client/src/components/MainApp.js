import React from 'react';

import GameWindow from './GameWindow';
import GameSidebar from './GameSidebar';

const MainApp = () => {
  return (
    <div className='app-content'>
      <GameWindow />
      <GameSidebar />
    </div>
  )
};

export default MainApp;
