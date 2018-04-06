import React, { Component } from 'react';

import pizza from '../../../assets/images/image-pizza.jpg';
import '../../../assets/styles/main.min.css';

class PizzaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 100,
      shopAutoClicksPrice: 10,
      shopAutoClicksBrought: 1,
      shopBonusClicksPrice: 25,
      shopBonusClicksBrought: 1
    }
  }
  
  buttonClicked = () => {
    if (this.state.shopBonusClicksBrought > 1) {
      this.setState({ clicks: this.state.clicks + this.state.shopBonusClicksBrought})
    } else {
      this.setState({ clicks: this.state.clicks + 1 })
    }
  };

  autoClicks = () => {
    if (this.state.clicks >= this.state.shopAutoClicksPrice) {
      this.setState({ 
        clicks: this.state.clicks - this.state.shopAutoClicksPrice,
        shopAutoClicksBrought: this.state.shopAutoClicksBrought + 1,
      });

      if (this.state.shopAutoClicksBrought > 3) {
        this.setState({ shopAutoClicksPrice: this.state.shopAutoClicksPrice * 2 });
      } else if (this.state.shopAutoClicksBrought > 10) {
        this.setState({ shopAutoClicksPrice: this.state.shopAutoClicksPrice * 2.5 });
      } else {
        this.setState({ shopAutoClicksPrice: this.state.shopAutoClicksPrice * 1.5 });
      }

      setInterval(() => this.setState({
        clicks: this.state.clicks + this.state.shopAutoClicksBrought
      }), 10000);
    }
  };

  bonusClicks = () => {
    if (this.state.clicks >= this.state.shopBonusClicksPrice) {
      this.setState({
        clicks: this.state.clicks - this.state.shopBonusClicksPrice,
        shopBonusClicksBrought: this.state.shopBonusClicksBrought + 1
      });

      this.setState({ shopBonusClicksPrice: this.state.shopBonusClicksPrice * 2 });
    }
  };

  render() {
    return (
      <div className="site-content">
        <div className="game-screen">
          <div className="action-button">
            <img className="action-button__image" onClick={this.buttonClicked} src={pizza} />
          </div>
          <div className="user-score">
            <span className="user-score__value">{this.state.clicks}</span>
          </div>
        </div>

        <div className="shop">
          <div className="shop-item">
            <h2 className="shop-item__title">Delivery Man</h2>
            <p className="shop-item__desc">Description: Adds {this.state.shopAutoClicksBrought} clicks every 10 seconds</p>
            <p className="shop-item__desc">Next Upgrade: Adds {this.state.shopAutoClicksBrought + 1} clicks every 10 seconds</p>
            <p className="shop-item__cost">Cost: {this.state.shopAutoClicksPrice}</p>
            <p className="shop-item__owned">Owned: {this.state.shopAutoClicksBrought - 1}</p>
            <button onClick={this.autoClicks}>Purchase</button>
          </div>
          <div className="shop-item">
            <h2 className="shop-item__title">More Cheese</h2>
            <p className="shop-item__desc">Description: Clicks are now worth {this.state.shopBonusClicksBrought} </p>
            <p className="shop-item__desc">Next Upgrade: Clicks are now worth {this.state.shopBonusClicksBrought * 1.5} </p>
            <p className="shop-item__cost">Cost: {this.state.shopBonusClicksPrice}</p>
            <p className="shop-item__owned">Owned: {this.state.shopBonusClicksBrought - 1}</p>
            <button onClick={this.bonusClicks}>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaScreen;