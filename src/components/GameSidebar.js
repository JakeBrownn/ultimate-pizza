import React from 'react';

import Shop from './Shop';
import SidebarButtons from './SidebarButtons';

const GameSidebar = () => {
  return (
    <div className='sidebar'>
      <Shop />
      <SidebarButtons />
    </div>
  )
};

export default GameSidebar;
