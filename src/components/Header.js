import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <Link to ="/">Home</Link>
        <Link to ="/pizza">Pizza Game</Link>
      </div>
    );
  }
}

export default Header;