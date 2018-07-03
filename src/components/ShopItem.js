import React, { Component } from 'react';

class ShopItem extends Component {
  handleItemHover(item) {
    console.log(item)
  }

  render() {
    const { triggerAction, icon, item, purchased } = this.props;

    return (
      <li className='shop-item' onClick={triggerAction} onMouseEnter={() => this.handleItemHover(item)}>
        <img className='shop-item__icon' src={icon} alt={item.title} />
        <p className='shop-item__owned'>{`Owned: ${purchased} / 3`}</p>
      </li>
    )
  }
}

export default ShopItem;
