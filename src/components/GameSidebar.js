import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import {
  buyDeliveryMan,
  activateDeliveryMan,
  buyExtraCheese,
  activateExtraCheese,
  intervalExtraCheese
} from '../actions';

import ShopItem from './ShopItem';
import {
  itemOne,
  itemTwo
} from '../data';

import IconDeliveryMan from '../assets/images/icon-delivery-man.png';
import IconExtraCheese from '../assets/images/icon-extra-cheese.png';
import soundPurchase from '../assets/audio/sound-purchase.mp3';
import SidebarButtons from './SidebarButtons';


class GameSidebar extends Component {

  // Handle 'purchase' sound effect
  purchaseSound() {
    const soundOne = new Audio(soundPurchase);

    soundOne.play();
  }

  // When Delivery Man is purchased
  handleDeliveryMan() {
    const { 
      purchased, 
      counter, 
      buyDeliveryMan, 
      activateDeliveryMan 
    } = this.props;

    if (itemOne.cost - 1 < counter.total && purchased.deliveryMan < 3) {
      
      // Call Redux actions
      buyDeliveryMan();
      activateDeliveryMan();

      this.purchaseSound();
    }
  }

  // When Extra Cheese is purchased
  handleExtraCheese() {
    const { 
      purchased, 
      counter, 
      buyExtraCheese, 
      activateExtraCheese,
      intervalExtraCheese
    } = this.props;

    if (itemTwo.cost - 1 < counter.total && purchased.extraCheese < 3) {

      // Call Redux actions
      buyExtraCheese();
      activateExtraCheese();
      setInterval(() => intervalExtraCheese(), itemTwo.intervalTime);

      this.purchaseSound();
    }
  }

  render() {
    const { purchased } = this.props;
      
    return (
      <div className='sidebar'>
        <div className='shop'>
          <h2 className='shop__title'>Upgrades</h2>
          <ShopItem
            title={itemOne.title}
            description={itemOne.desc}
            icon={IconDeliveryMan}
            itemCost={itemOne.cost}
            purchased={`${purchased.deliveryMan}/ 3`}
            triggerAction={() => this.handleDeliveryMan()}
          />
          <ShopItem
            title={itemTwo.title}
            description={itemTwo.desc}
            icon={IconExtraCheese}
            itemCost={itemTwo.cost}
            purchased={`${purchased.extraCheese}/ 3`}
            triggerAction={() => this.handleExtraCheese()}
          />
        </div>
        <SidebarButtons />
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
})(GameSidebar);
