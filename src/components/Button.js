import React, { Component } from 'react';

import SoundToggle from '../assets/audio/sound-toggle.mp3';

class Button extends Component {

  // Play 'click' sound effect
  playClickSound() {
    const clickSound = new Audio(SoundToggle);

    clickSound.play();   
  }

  // When Button is clicked
  handleClick(e) {
    e.preventDefault();

    this.playClickSound();
    this.props.onClick();
  }

  // Render Button structure
  buttonContents() {
    const { withIcon, children } = this.props;

    if (withIcon) {
      return (
        <div className='sidebar-option__wrapper'>
          {children}
        </div>
      );
    }

    return (
      <div className='sidebar-option__wrapper'>
        <span className='sidebar-option__text'>{children}</span>
      </div>
    );
  }

  render() {
    const { className } = this.props;
    
    return (
      <div className={`sidebar-option` + (className ? ` sidebar-option--${className}` : '')} onClick={(e) => this.handleClick(e)}>
        {this.buttonContents()}
      </div>
    );
  }
};

export default Button;
