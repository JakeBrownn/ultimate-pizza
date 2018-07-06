import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  startGameAnimations,
  usernameChanged, 
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

  // When Start Button is pressed
  handleFormSubmit(e) {
    e.preventDefault();

    this.props.startGameAnimations();

    this.fadeOutSoundtrack();

    // Run when Intro Animations have finished
    setTimeout(() => {
      const menuSoundtrack = document.getElementById('gameSoundtrack');
      menuSoundtrack.play();  

      this.props.startGame();
    }, 8000);
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
