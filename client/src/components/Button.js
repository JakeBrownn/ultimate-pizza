import React, { Component } from 'react';

import SoundToggle from '../assets/audio/sound-toggle.mp3';

class Button extends Component {

  // When Button is clicked
  handleClick() {
    const { whenClicked } = this.props;
    const clickSound = new Audio(SoundToggle);

    // Play 'click' sound effect
    clickSound.play();   

    // If Button has Props of 'onClick'
    if (whenClicked) {
      whenClicked();
    }
  }

  // Render Button JSX structure
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
