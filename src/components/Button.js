import React from 'react';

const Button = ({ className, triggerAction, children }) => {
  return (
    <div className={`sidebar-option` + (className != '' ? ` sidebar-option--${className}` : '')} onClick={triggerAction}>
      <div className='sidebar-option__wrapper'>
        {children}
      </div>
    </div>
  )
};

export default Button;
