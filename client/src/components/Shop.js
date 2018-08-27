import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../actions';
import { itemOne, itemTwo, itemThree } from '../data';
import ShopItem from './ShopItem';
import SidebarInfo from './SidebarInfo';
import soundPurchase from '../assets/audio/sound-purchase.mp3';
import IconDeliveryMan from '../assets/images/icon-delivery-man.png';
import IconExtraCheese from '../assets/images/icon-extra-cheese.png';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.clickExtraCheese = this.clickExtraCheese.bind(this);
    this.clickDeliveryMan = this.clickDeliveryMan.bind(this);
  }
  
  // Play the 'purchase' sound effect
  purchaseSound() {
    const soundOne = new Audio(soundPurchase);

    soundOne.play();
  }

  // When Delivery Man ShopItem is clicked
  clickDeliveryMan() {
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
  clickExtraCheese() {
    const { 
      purchased, 
      counter, 
      intervalExtraCheese
    } = this.props;

    // If purchase is successful
    if (itemTwo.cost <= counter.total && purchased.extraCheese < 3) {
      this.purchaseSound();
      this.props.buyExtraCheese();
      this.props.activateExtraCheese();

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
            totalPurchased={deliveryMan}
            triggerAction={this.clickDeliveryMan}
          />
          <ShopItem
            item={itemTwo}
            icon={IconExtraCheese}
            totalPurchased={extraCheese}
            triggerAction={this.clickExtraCheese}
          />
          <ShopItem
            item={itemThree}
            icon={IconDeliveryMan}
            totalPurchased={deliveryMan}
            triggerAction={this.clickDeliveryMan}
          />
        </ul>
        <SidebarInfo />
      </div>
    );
  }
};

const mapStateToProps = ({ counter, purchased }) => {
  return { counter, purchased };
};

export default connect(mapStateToProps, actions)(Shop);
