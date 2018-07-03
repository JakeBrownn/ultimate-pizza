import React from 'react';

const SidebarOption = ({ className, triggerAction, children }) => {
  return (
    <div className={`sidebar-option sidebar-option--${className}`} onClick={triggerAction}>
      {children}
    </div>
  )
};

export default SidebarOption;