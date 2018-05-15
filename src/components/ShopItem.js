import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item" onClick={this.props.triggerAction}>
        <img className="shop-item__icon" src={this.props.icon} alt="Delivery Man" />
        <div className="shop-item__content">
          <h2 className="shop-item__title">{this.props.title}</h2>
          <div className="shop-item__popup">
            <p className="shop-item__owned">Owned: {this.props.purchased}</p>
            <p className="shop-item__desc">{this.props.description}</p>
          </div>
          <p className="shop-item__cost">{this.props.itemCost} Slices</p>
        </div>
      </div>
    );
  }
};

export default ShopItem;
