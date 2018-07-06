import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usernameChanged, startGame } from '../actions';

import WelcomeBackground from '../assets/images/background-welcome-screen.jpg';


class WelcomeScreen extends Component {
  onInputChange(e) {
    this.props.usernameChanged(e.target.value);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      this.props.startGame();
    }, 4000);
  }

  render() {
    const { toggles } = this.props;

    return (
      <div className={`welcome-screen welcome-screen--${toggles.welcomeScreen}`} onSubmit={(e) => this.handleFormSubmit(e)}>
        <h1 className='welcome-screen__title'>Ultimate Pizza</h1>
        <form className='user-form' id='welcome-form'>
          <span className='user-form__text'>Enter a username to play.</span>
          <div className='user-form__row'>
            <input 
              className='user-form__field' 
              type='text'
              placeholder='Username' 
              autoFocus 
              autoComplete='off'
              onChange={(e) => this.onInputChange(e)}
            />
            <button className='user-form__submit' type='submit'>Let's Go</button>
          </div>
        </form>
        <div className='welcome-screen__background-wrapper'>
          <img className='welcome-screen__background' src={WelcomeBackground} alt='Game Background' />
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
})(WelcomeScreen);
