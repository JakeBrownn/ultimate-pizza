import React from 'react';

const ShopItem = ({ triggerAction, icon, title, itemCost }) => {
  return (
    <div className='shop-item' onClick={triggerAction}>
      <img className='shop-item__icon' src={icon} alt={title} />
      <div className='shop-item__content'>
        <h2 className='shop-item__title'>{title}</h2>
        <p className='shop-item__cost'>Cost: {itemCost}</p>
      </div>
    </div>
  )
};

export default ShopItem;
