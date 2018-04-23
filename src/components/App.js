import React, { Component } from 'react';

import pizza from '../assets/images/image-pizza.jpg';
import '../assets/styles/main.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      shopAutoClicksPrice: 10,
      shopAutoClicksBrought: 1,
      shopBonusClicksPrice: 25,
      shopBonusClicksBrought: 1
    }
  };
  
  imageClicked = () => {
    const { shopBonusClicksBrought, clicks } = this.state;

    if (shopBonusClicksBrought > 1) {
      this.setState({ clicks: clicks + shopBonusClicksBrought})
    } else {
      this.setState({ clicks: clicks + 1 })
    }
  };

  autoClicks = () => {
    const { clicks, shopAutoClicksPrice, shopAutoClicksBrought } = this.state;

    if (clicks >= shopAutoClicksPrice) {
      this.setState({ 
        clicks: clicks - shopAutoClicksPrice,
        shopAutoClicksBrought: shopAutoClicksBrought + 1,
      });

      if (shopAutoClicksBrought > 3) {
        this.setState({ shopAutoClicksPrice: shopAutoClicksPrice * 2 });
      } else if (shopAutoClicksBrought > 10) {
        this.setState({ shopAutoClicksPrice: shopAutoClicksPrice * 2.5 });
      } else {
        this.setState({ shopAutoClicksPrice: shopAutoClicksPrice * 1.5 });
      }

      setInterval(() => this.setState({
        clicks: clicks + shopAutoClicksBrought
      }), 10000);
    }
  };

  bonusClicks = () => {
    const { clicks, shopBonusClicksPrice, shopBonusClicksBrought } = this.state;

    if (clicks >= shopBonusClicksPrice) {
      this.setState({
        clicks: clicks - shopBonusClicksPrice,
        shopBonusClicksBrought: shopBonusClicksBrought + 1
      });

      this.setState({ shopBonusClicksPrice: shopBonusClicksPrice * 2 });
    }
  };

  render() {
    return (
      <div className="site-content">
        <div className="game-screen">
          <div className="action-button">
            <img className="action-button__image" onClick={this.imageClicked} src={pizza} alt="Pizza" />
          </div>
          <div className="user-score">
            <span className="user-score__value">{this.state.clicks} Slices</span>
          </div>
        </div>

        <div className="shop">
          <h2 className="shop__title">Upgrades</h2>
          <div className="shop-item">
            <h2 className="shop-item__title">Delivery Man</h2>
            <div className="shop-item__popup">
              <p className="shop-item__owned">[Owned: {this.state.shopAutoClicksBrought - 1}]</p>
              <p className="shop-item__desc">Adds {this.state.shopAutoClicksBrought} clicks every 10 seconds</p>
              <ul className="shop-item__upgrade-list">
                <li className="shop-item__upgrade-text">Adds {this.state.shopAutoClicksBrought + 1} clicks every 10 seconds</li>
              </ul>
            </div>
            <p className="shop-item__cost">Cost: {this.state.shopAutoClicksPrice}</p>
            <button className="shop-item__button" onClick={this.autoClicks}>Purchase</button>
          </div>
          <div className="shop-item">
            <h2 className="shop-item__title">More Cheese</h2>
            <div className="shop-item__popup">
              <p className="shop-item__owned">[Owned: {this.state.shopBonusClicksBrought - 1}]</p>
              <p className="shop-item__desc">Clicks are now worth {this.state.shopBonusClicksBrought} </p>
              <ul className="shop-item__upgrade-list">
                <li className="shop-item__upgrade-text">Clicks are now worth {this.state.shopBonusClicksBrought * 1.5} </li>
              </ul>
            </div>
            <p className="shop-item__cost">Cost: {this.state.shopBonusClicksPrice}</p>
            <button className="shop-item__button" onClick={this.bonusClicks}>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;