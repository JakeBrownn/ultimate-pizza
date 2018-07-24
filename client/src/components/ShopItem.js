import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleItemInfo } from '../actions';

class ShopItem extends Component {

  // Send ShopItem detail to SidebarInfo component
  handleItemHover(item) {
    this.props.toggleItemInfo(item);
  }

  render() {
    const { triggerAction, icon, item, totalPurchased } = this.props;
    const { infoUnlocked } = this.props.purchased;
    const itemOwnedString = 'shop-item__owned';

    // Toggle class if item title is in the infoUnlocked array 
    const itemOwnedClassName = ( !infoUnlocked.includes(item.title) ? `${itemOwnedString} ${itemOwnedString}--na`: `${itemOwnedString}`);

    return (
      <li 
        className='shop-item' 
        onClick={triggerAction} 
        onMouseEnter={() => this.handleItemHover(item)}
        onMouseLeave={() => this.handleItemHover(item)}
      >
        <img className='shop-item__icon' src={icon} alt={item.title} />
        <span className={itemOwnedClassName}>{`Owned: ${totalPurchased} / 3`}</span>
      </li>
    )
  }
}

// Map State from Store into Props
const mapStateToProps = ({ counter, purchased }) => {
  return { counter, purchased };
}

export default connect(mapStateToProps, {toggleItemInfo})(ShopItem);
