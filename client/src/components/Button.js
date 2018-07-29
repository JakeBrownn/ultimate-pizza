import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundToggle from '../assets/audio/sound-toggle.mp3';

const propTypes = {
  type: PropTypes.string,
  linkURL: PropTypes.string,
  buttonIcon: PropTypes.string,
  buttonText: PropTypes.string,
  whenClicked: PropTypes.func
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // When Button is clicked
  handleClick() {
    const { whenClicked } = this.props;
    const clickSound = new Audio(SoundToggle);

    // Play 'click' sound effect
    clickSound.play();   

    // If Button has Props of 'onClick'
    (whenClicked) && (whenClicked());
  }

  renderButtonContent() {
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
        return <a className={wrapperClassName} href={linkURL} target='_blank'>{children}</a>;
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
    const buttonClass = ( className ? `sidebar-option sidebar-option--${className}` : 'sidebar-option' );
    
    return (
      <div className={buttonClass} onClick={this.handleClick}>
        {this.renderButtonContent()}
      </div>
    )
  }
};

Button.propTypes = propTypes;

export default Button;
