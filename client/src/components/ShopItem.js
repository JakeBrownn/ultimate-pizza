import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleItemInfo } from '../actions';


class ShopItem extends Component {

  // Dispatches ShopItem details to SidebarInfo component
  handleItemHover(item) {
    this.props.toggleItemInfo(item);
  }

  render() {
    const { 
      triggerAction, 
      icon, 
      item, 
      purchased 
    } = this.props;

    return (
      <li 
        className='shop-item' 
        onClick={triggerAction} 
        onMouseEnter={() => this.handleItemHover(item)}
        onMouseLeave={() => this.handleItemHover(item)}
      >
        <img className='shop-item__icon' src={icon} alt={item.title} />
        <span className='shop-item__owned'>{`Owned: ${purchased} / 3`}</span>
      </li>
    )
  }
}

export default connect(null, {toggleItemInfo})(ShopItem);
