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
  purchaseSound() {
    const soundOne = new Audio(soundPurchase);

    soundOne.play();
  };

  handleIntervalSlices() {
    setInterval(() => this.props.dispatch(intervalExtraCheese()), 2000)
  };

  render() {
    const { dispatch, upgradesOwned, clicks } = this.props;
      
    return (
      <div className="sidebar">
        <div className="shop">
          <h2 className="shop__title">Upgrades</h2>
          <ShopItem
            title="Delivery Man"
            description={"Double your pizza slices."}
            icon={IconDeliveryMan}
            itemCost={"250"}
            purchased={upgradesOwned.deliveryMan + "/ 3"}
            triggerAction={
              () => {
                if (250 < clicks.total && upgradesOwned.deliveryMan < 3) {
                  dispatch(buyDeliveryMan())
                  dispatch(activateDeliveryMan())
                  this.purchaseSound()
                };
              }
            }
          />
          <ShopItem
            title="Extra Cheese"
            description={"Adds 1 slice every 10 seconds."}
            icon={IconExtraCheese}
            itemCost={"150"}
            purchased={upgradesOwned.extraCheese + "/ 3"}
            triggerAction={
              () => {
                if (upgradesOwned.extraCheese < 3) {
                  dispatch(buyExtraCheese())
                  dispatch(activateExtraCheese())
                  this.handleIntervalSlices()
                  this.purchaseSound()
                };
              }
            }
          />
        </div>
        <SidebarInfo />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    clicks: state.counter,
    upgradesOwned: state.purchased,
  };
};

export default connect(mapStateToProps)(Sidebar);
