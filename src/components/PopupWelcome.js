import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameChanged, startGame } from '../actions';

import WelcomeBackground from '../assets/images/background-welcome-screen.jpg';


class PopupWelcome extends Component {
  onInputChange(e) {
    this.props.usernameChanged(e.target.value)
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.startGame();
  }

  render() {
    const { toggles } = this.props;

    return (
      <div className={`user-popup user-popup--${toggles.userPopupClass}`} onSubmit={(e) => this.handleFormSubmit(e)}>
        <h1 className='user-popup__title'>Ultimate Pizza</h1>
        <form className='form form--popup' id='welcome-form'>
          <span className='form__text'>Enter a username to play.</span>
          <div className='form__row'>
            <input 
              className='form__field' 
              type='text'
              placeholder='Username' 
              autoFocus 
              autoComplete='off'
              onChange={(e) => this.onInputChange(e)}
            />
            <button className='form__submit' type='submit'>Let's Go</button>
          </div>
        </form>
        <div className='user-popup__background-wrapper'>
          <img className='user-popup__background' src={WelcomeBackground} alt='Game Background' />
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ toggles, form }) => {
  return { toggles, form };
};


export default connect(mapStateToProps, {
  usernameChanged,
  startGame
})(PopupWelcome);
