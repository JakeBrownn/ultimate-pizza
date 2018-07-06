import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  startGameAnimations,
  usernameChanged, 
  startGame 
} from '../actions';

import WelcomeBackground from '../assets/images/background-welcome-screen.jpg';


class WelcomeScreen extends Component {
  onInputChange(e) {
    this.props.usernameChanged(e.target.value);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.startGameAnimations();

    setTimeout(() => {
      this.props.startGame();
    }, 8000);
  }
  
  render() {
    const { 
      welcomeScreen,
      welcomeScreenContent,
      blueBackground
    } = this.props.toggles;

    return (
      <div className={`welcome-screen welcome-screen--${welcomeScreen}`} onSubmit={(e) => this.handleFormSubmit(e)}>
        <div className={`welcome-screen__animate-wrapper welcome-screen__animate-wrapper--${welcomeScreenContent}`}>
          <div className='welcome-screen__content'>
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
          </div>
          <div className='welcome-screen__background-wrapper'>
            <img className='welcome-screen__background' src={WelcomeBackground} alt='Game Background' />
          </div>
        </div>
        <div className={`welcome-screen__blue-backdrop ${blueBackground}`}></div>
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
  startGameAnimations,
  startGame
})(WelcomeScreen);
