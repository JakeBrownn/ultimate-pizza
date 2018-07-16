import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  usernameChanged, 
  startGameAnimations,
  startGame 
} from '../actions';

import MenuSoundtrack from '../assets/audio/soundtrack-menu.mp3';
import WelcomeBackground from '../assets/images/background-welcome-screen.jpg';


class WelcomeScreen extends Component {
  componentDidMount() {
    const MenuSoundtrack = document.getElementById('menuSoundtrack');

    MenuSoundtrack.play();  
  }

  // Handle user typing in Input Field
  onInputChange(e) {
    this.props.usernameChanged(e.target.value);
  }

  // If Username input contains spaces 
  inputSpacesError() {
    const { playerUsername } = this.props.form;

    if (playerUsername.indexOf(' ') < 0) {
      return <span className='user-form__error'>Your username must not contain spaces.</span>;
    }
  }


  // If Username length is too short
  inputLengthError() {
    const { playerUsername } = this.props.form;

    if (playerUsername.length >= 3) {
      return <span className='user-form__error'>Your username must be greater than 2 characters.</span>;
    }
  }

  // Welcome Screen Message
  welcomeScreenText() {
    const { playerUsername } = this.props.form;

    // if (playerUsername.indexOf(' ') === 0) {
    //   return <span className='user-form__error'>Your username must not contain spaces.</span>;
    // }

    if (playerUsername.length >= 3) {
      return <span className='user-form__error'>Your username must be greater than 2 characters.</span>;
    }
    
    return 'Enter a username to start the game.';
  }

  // When Start Button is pressed
  handleFormSubmit(e) {
    const { playerUsername } = this.props.form;

    e.preventDefault();

    // Username must be longer than 3 characters and does not contain spaces
    if (playerUsername.indexOf(' ') === -1 || playerUsername.length >= 3) {
      this.props.startGameAnimations();
      // this.fadeOutSoundtrack();
  
      // Run when Intro Animations have finished
      setTimeout(() => {
        const menuSoundtrack = document.getElementById('gameSoundtrack');
        menuSoundtrack.play();  
  
        this.props.startGame();
      }, 8000);
    } else {
      this.welcomeScreenText();
    }
  }

  // Fade Out MenuSoundtrack
  fadeOutSoundtrack() {
    const menuSoundtrack = document.getElementById('menuSoundtrack');
    let counter = 1;

    const fadeOut = setInterval(() => {
      menuSoundtrack.volume -= 0.1;
      counter++;

      if (counter > 9) {
        menuSoundtrack.pause();

        clearInterval(fadeOut);
      }
    }, 120);
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
              <span className='user-form__text'>{this.welcomeScreenText()}</span>
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
            <span className='welcome-screen__version'>1.0.0</span>
          </div>
          <div className='welcome-screen__background-wrapper'>
            <img className='welcome-screen__background' src={WelcomeBackground} alt='Game Background' />
          </div>
        </div>
        <div className={`welcome-screen__blue-backdrop ${blueBackground}`}></div>
        <audio id='menuSoundtrack'><source src={MenuSoundtrack} type='audio/mpeg' /></audio> 
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
