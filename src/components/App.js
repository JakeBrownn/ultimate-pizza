import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import ShopItem from './ShopItem';
import Leaderboard from './Leaderboard';
import { 
  incrementClicks,
  soundCounter,
  resetSoundCounter,
  levelUp
} from '../actions';

import pizza from '../assets/images/image-pixel-pizza.png';
import soundChompOne from '../assets/audio/sound-chomp-1.mp3';
import soundChompTwo from '../assets/audio/sound-chomp-2.mp3';

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      priceAutoClicks: 10,
      purchasedAutoClicks: 1,
      upgradeAutoClicks: 1,
      autoClicksRunning: 'not running'
    };
  };
  
  playSound() {
    const { soundCount } = this.props;

    const soundOne = new Audio(soundChompOne);
    const soundTwo = new Audio(soundChompTwo);

    ( soundCount.val === 1 ) ? soundOne.play() : soundTwo.play();
  };
  
  addClick() {
    const { dispatch, soundCount } = this.props;

    dispatch(incrementClicks());
    dispatch(soundCounter());
    
    if (soundCount.val > 1) {      
      dispatch(resetSoundCounter());
    };
  };
  
  handleClick = () => {
    this.addClick();
    this.playSound();
  };
  
  // bonusClicks = () => {
  //   const { clicks, priceBonusClicks, purchasedBonusClicks } = this.state;
    
  //   if (clicks >= priceBonusClicks) {
  //     this.setState({
  //       clicks: clicks - priceBonusClicks,
  //       purchasedBonusClicks: purchasedBonusClicks + 1
  //     });
      
  //     this.setState({ priceBonusClicks: priceBonusClicks * 2 });
  //   }
  // };
  
  // autoClicksTimer() {
  //   setInterval(() => this.setState({
  //     clicks: this.state.clicks + this.state.purchasedAutoClicks
  //   }), 2000);
  // };
  
  // autoClicks = () => {
  //   const { clicks, priceAutoClicks, purchasedAutoClicks,upgradeAutoClicks } = this.state;
    
  //   if (clicks >= priceAutoClicks) {
  //     this.setState({ 
  //       clicks: clicks - priceAutoClicks,
  //       purchasedAutoClicks: purchasedAutoClicks + 1,
  //       upgradeAutoClicks: purchasedAutoClicks + 2,
  //     });
      
  //     this.autoClicksTimer();
      
  //     if (purchasedAutoClicks < 3) {
  //       this.setState({ priceAutoClicks: priceAutoClicks * 1.5 });
  //     } else if (purchasedAutoClicks < 10) {
  //       this.setState({ priceAutoClicks: priceAutoClicks * 2 });
  //     } else {
  //       this.setState({ priceAutoClicks: priceAutoClicks * 2.5 });
  //     }
  //   }
  // };
  
  render() {
    const { 
      priceAutoClicks, 
      priceBonusClicks, 
      purchasedAutoClicks, 
      purchasedBonusClicks,
      upgradeAutoClicks,
      upgradeBonusClicks
    } = this.state;
    
    // console.log(this.state);
    console.log(this.props.playerLevel.level);

    return (      
      <div className="app-content">
        <div className="game-screen">
          <div className="action-window">
            <div className="action-button">
              <img className="action-button__image" onClick={this.handleClick} src={pizza} alt="Pizza" />
            </div>
            <div className="user-score">
              <span className="user-score__value">{this.props.clicks.total} Slices</span>
            </div>
            <div className="user-level">
              <span className="user-level__value">Level {this.props.playerLevel.level}</span>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="shop">
            <h2 className="shop__title">Upgrades</h2>
            <ShopItem
              title="Extra Toppings"
              description={"Adds " + purchasedAutoClicks + " clicks every 10 seconds"}
              upgradeText={"An additional " + upgradeAutoClicks + " clicks every 10 seconds"}
              itemCost={priceAutoClicks}
              purchased={purchasedAutoClicks - 1}
              helperFunction={this.autoClicks}
            />
            <ShopItem
              title="Delivery Man"
              description={"Recieve 150 tastey slices"}
              itemCost={"100"}
              purchased={"0"}
              helperFunction={null}
            />
          </div>
          <Leaderboard 
            title={"Leaderboard"}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    clicks: state.counter,
    soundCount: state.soundCount,
    playerLevel: state.level
  };
};

export default connect(mapStateToProps)(App);
