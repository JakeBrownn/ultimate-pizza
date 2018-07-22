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
    (whenClicked) && (whenClicked());
  }

  buttonContents() {
    const { type, linkURL, buttonIcon, buttonText, children } = this.props;
    const wrapperClassName = 'sidebar-option__wrapper';
    const textClassName = 'sidebar-option__text';
    const iconClassName = 'sidebar-option__icon';

    // Decide Component JSX structure based on props
    switch(type) {
      case 'icon':
        return (
          <div className={wrapperClassName}>
            <img className={iconClassName} src={buttonIcon} alt={buttonText} />
            <span className={textClassName}>{buttonText}</span>
          </div>
        );
      case 'text':
        return (
          <div className={wrapperClassName}>
            <span className={textClassName}>{children}</span>
          </div>
        );
      case 'link':
        return <a className={wrapperClassName} href={linkURL} target='_blank'>{children}</a>
      default:
        return (
          <div className={wrapperClassName}>
            {children}
          </div>
        );
    }
  }

  render() {
    const { className } = this.props;
    const buttonClass = (`sidebar-option` + (className ? ` sidebar-option--${className}` : ''));
    
    return (
      <div className={buttonClass} onClick={() => this.handleClick()}>
        {this.buttonContents()}
      </div>
    );
  }
};

export default Button;
