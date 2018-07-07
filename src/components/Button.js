import React, { Component } from 'react';

import SoundToggle from '../assets/audio/sound-toggle.mp3';

class Button extends Component {

  // Play 'click' sound effect
  playClickSound() {
    const clickSound = new Audio(SoundToggle);

    clickSound.play();   
  }

  // When Button is clicked
  handleClick() {
    const { onClick } = this.props;

    this.playClickSound();

    if (onClick) {
      onClick();
    }
  }

  // Render Button structure
  buttonContents() {
    const { type, linkURL, children } = this.props;
    const wrapperClassName = 'sidebar-option__wrapper';

    switch(type) {
      case 'icon':
        return <div className={wrapperClassName}>{children}</div>;
      case 'link':
        return <a className={wrapperClassName} href={linkURL} target='_blank'>{children}</a>
      default:
        return <div className={wrapperClassName}><span className='sidebar-option__text'>{children}</span></div>;
    }
  }

  render() {
    const { className } = this.props;
    
    return (
      <div className={`sidebar-option` + (className ? ` sidebar-option--${className}` : '')} onClick={() => this.handleClick()}>
        {this.buttonContents()}
      </div>
    );
  }
};

export default Button;
