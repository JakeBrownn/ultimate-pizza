import React from 'react';

const SidebarOption = ({ className, triggerAction, children }) => {
  return (
    <div className={`sidebar-option sidebar-option--${className}`} onClick={triggerAction}>
      <div className='sidebar-option__wrapper'>
        {children}
      </div>
    </div>
  )
};

export default SidebarOption;

