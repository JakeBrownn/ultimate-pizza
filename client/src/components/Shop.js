import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import ShopItem from './ShopItem';
import SidebarInfo from './SidebarInfo';
import { itemOne, itemTwo, itemThree } from '../data';

import {
  buyDeliveryMan,
  activateDeliveryMan,
  buyExtraCheese,
  activateExtraCheese,
  intervalExtraCheese
} from '../actions';

import soundPurchase from '../assets/audio/sound-purchase.mp3';
import IconDeliveryMan from '../assets/images/icon-delivery-man.png';
import IconExtraCheese from '../assets/images/icon-extra-cheese.png';

class Shop extends Component {
  
  // Play the 'purchase' sound effect
  purchaseSound() {
    const soundOne = new Audio(soundPurchase);

    soundOne.play();
  }

  // When Delivery Man ShopItem is clicked
  handleDeliveryMan() {
    const { 
      purchased, 
      counter, 
      buyDeliveryMan, 
      activateDeliveryMan 
    } = this.props;

    // If purchase is successful
    if (itemOne.cost <= counter.total && purchased.deliveryMan < 3) {
      this.purchaseSound();
      buyDeliveryMan();
      activateDeliveryMan();
    }
  }

  // When Extra Cheese ShopItem is clicked
  handleExtraCheese() {
    const { 
      purchased, 
      counter, 
      buyExtraCheese, 
      activateExtraCheese,
      intervalExtraCheese
    } = this.props;

    // If purchase is successful
    if (itemTwo.cost <= counter.total && purchased.extraCheese < 3) {
      this.purchaseSound();
      buyExtraCheese();
      activateExtraCheese();

      // Add Slices on interval of set on Extra Cheese ShopItem
      setInterval(() => intervalExtraCheese(), itemTwo.intervalTime);
    }
  }

  render() {
    const { deliveryMan, extraCheese} = this.props.purchased;

    return (
      <div className='shop'>
        <h2 className='shop__title'>Upgrades</h2>
        <ul className='shop__item-list'>
          <ShopItem
            item={itemOne}
            icon={IconDeliveryMan}
            purchased={deliveryMan}
            triggerAction={() => this.handleDeliveryMan()}
          />
          <ShopItem
            item={itemTwo}
            icon={IconExtraCheese}
            purchased={extraCheese}
            triggerAction={() => this.handleExtraCheese()}
          />
          <ShopItem
            item={itemThree}
            icon={IconDeliveryMan}
            purchased={deliveryMan}
            triggerAction={() => this.handleDeliveryMan()}
          />
        </ul>
        <SidebarInfo />
      </div>
    );
  }
};

// Map State from Redux Store into Props
const mapStateToProps = ({ counter, purchased }) => {
  return { counter, purchased };
};

export default connect(mapStateToProps, {
  buyDeliveryMan,
  activateDeliveryMan,
  buyExtraCheese,
  activateExtraCheese,
  intervalExtraCheese
})(Shop);