import React from 'react';

const SidebarRow = (props) => {
  return (
    <div className='sidebar-buttons__row'>
      {props.children}
    </div>
  )
};

export default SidebarRow;

