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

import IconDeliveryMan from '../assets/images/icon-delivery-man.png';
import IconExtraCheese from '../assets/images/icon-extra-cheese.png';
import soundPurchase from '../assets/audio/sound-purchase.mp3';
import SidebarInfo from './SidebarInfo';


class Sidebar extends Component {

  // Handle 'purchase' sound effect
  purchaseSound() {
    const soundOne = new Audio(soundPurchase);

    soundOne.play();
  }

  // Add slices on interval when 'Extra Cheese' is purchased
  handleIntervalSlices() {
    setInterval(() => this.props.dispatch(intervalExtraCheese()), 2000)
  }

  // Activated when Delivery Man is purchased
  handleDeliveryMan() {
    const { dispatch, purchased, counter } = this.props;

    if (249 < counter.total && purchased.deliveryMan < 3) {
      dispatch(buyDeliveryMan())
      dispatch(activateDeliveryMan())
      this.purchaseSound()
    }
  }

  // Activated when Extra Cheese is purchased
  handleExtraCheese() {
    const { dispatch, purchased, counter } = this.props;

    if (149 < counter.total && purchased.extraCheese < 3) {
      dispatch(buyExtraCheese())
      dispatch(activateExtraCheese())
      this.handleIntervalSlices()
      this.purchaseSound()
    }
  }

  render() {
    const { purchased } = this.props;
      
    return (
      <div className='sidebar'>
        <div className='shop'>
          <h2 className='shop__title'>Upgrades</h2>
          <ShopItem
            title='Delivery Man'
            description={'Double your pizza slices.'}
            icon={IconDeliveryMan}
            itemCost={'250'}
            purchased={purchased.deliveryMan + '/ 3'}
            triggerAction={() => this.handleDeliveryMan()}
          />
          <ShopItem
            title='Extra Cheese'
            description={'Adds 1 slice every 10 seconds.'}
            icon={IconExtraCheese}
            itemCost={'150'}
            purchased={purchased.extraCheese + '/ 3'}
            triggerAction={() => this.handleExtraCheese()}
          />
        </div>
        <SidebarInfo />
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ counter, purchased }) => {
  return { counter, purchased };
};

export default connect(mapStateToProps)(Sidebar);
