import React, { Component } from 'react';

const ShopItem = (props) => {
  const { triggerAction, icon, title, purchased, description, itemCost } = props;

  return (
    <div className="shop-item" onClick={triggerAction}>
      <img className="shop-item__icon" src={icon} alt="Delivery Man" />
      <div className="shop-item__content">
        <h2 className="shop-item__title">{title}</h2>
        <div className="shop-item__popup">
          <p className="shop-item__owned">Owned: {purchased}</p>
          <p className="shop-item__desc">{description}</p>
        </div>
        <p className="shop-item__cost">{itemCost} Slices</p>
      </div>
    </div>
  );
};

export default ShopItem;
