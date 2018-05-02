import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item">
        <h2 className="shop-item__title">{this.props.title}</h2>
        <div className="shop-item__popup">
          <p className="shop-item__owned">[Owned: {this.props.purchased}]</p>
          <p className="shop-item__desc">{this.props.description}</p>
          <ul className="shop-item__upgrade-list">
            <li className="shop-item__upgrade-text">{this.props.upgradeText}</li>
          </ul>
        </div>
        <p className="shop-item__cost">{this.props.itemCost} Slices</p>
        <button className="shop-item__button" onClick={this.props.helperFunction}>Purchase</button>
      </div>
    );
  }
};

export default ShopItem;
