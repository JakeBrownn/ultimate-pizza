import React, { Component } from 'react';
import { connect } from 'react-redux';
import packageJson from '../../package.json';
import { 
  usernameChanged, 
  usernameError,
  startGameAnimations,
  startGame  
} from '../actions';
import WelcomeBackground from '../assets/images/background-welcome-screen.jpg';

class WelcomeScreen extends Component {
  
  // Handle user typing in Input Field
  onInputChange(e) {
    this.props.usernameChanged(e.target.value);
  }

  // When Start Button is pressed
  handleFormSubmit(e) {
    e.preventDefault();

    const { playerUsername } = this.props.form;
    const minUserLength = 5;
    const inputValidator = /[^\w]|_/g;

    switch(true) {

      // If Username is not entered
      case (playerUsername.length === 0):
        this.props.usernameError(`You must enter a username to continue.`);
        break;
      
      // If Username is too short
      case (playerUsername.length < minUserLength):
        this.props.usernameError(`Your username must be greater than ${minUserLength - 1} characters.`);
        break;
      
      // If Username contains spaces
      case (playerUsername.indexOf(' ') > 1):
        this.props.usernameError('Your username must not contain spaces.');
        break;

      // If Username is contains symbols
      case (inputValidator.test(playerUsername)):
        this.props.usernameError('Your username must only contain letters and numbers.');
        break;
      default: 
        this.props.startGameAnimations();
    
        // Wait for WelcomeScreen animations to finish
        setTimeout(() => {
          const gameSoundtrack = document.getElementById('gameSoundtrack');

          gameSoundtrack.play();  
          this.props.startGame();
        }, 8000);
    }
  }
  
  render() {
    const { 
      welcomeScreen,
      welcomeScreenContent,
      welcomeMessage,
      welcomeMessageClass,
      blueBackground
    } = this.props.toggles;

    return (
      <div className={`welcome-screen welcome-screen--${welcomeScreen}`} onSubmit={(e) => this.handleFormSubmit(e)}>
        <div className={`welcome-screen__animate-wrapper welcome-screen__animate-wrapper--${welcomeScreenContent}`}>
          <div className='welcome-screen__content'>
            <h1 className='welcome-screen__title'>Ultimate Pizza</h1>
            <form className='user-form' id='welcome-form'>
              <span className={`user-form__text ${welcomeMessageClass}`}>{welcomeMessage}</span>
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
            <span className='welcome-screen__version'>{packageJson.version}</span>
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
  usernameError,
  startGameAnimations,
  startGame
})(WelcomeScreen);
