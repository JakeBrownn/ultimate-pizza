import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import WelcomeScreen from './WelcomeScreen';
import PopupWarning from './PopupWarning';
import PopupLeaderboard from './PopupLeaderboard';

import { incrementClicks, toggleSoundChomp } from '../actions';

import pizza from '../assets/images/image-pixel-pizza.png';
import soundChompOne from '../assets/audio/sound-chomp-1.mp3';
import soundChompTwo from '../assets/audio/sound-chomp-2.mp3';


class GameWindow extends Component {

  // Handle onClick of Pizza
  addClick() {
    const { toggles, toggleSoundChomp, incrementClicks } = this.props;
    const soundOne = new Audio(soundChompOne);
    const soundTwo = new Audio(soundChompTwo);
    
    // Call Redux actions
    toggleSoundChomp();
    incrementClicks();

    // Toggle Chomp sounds effects
    ( toggles.chompSound === 1 ) ? soundOne.play() : soundTwo.play();
  }

  renderPopups() {
    return (
      <div className='popup-windows'>
        <WelcomeScreen />
        <PopupLeaderboard />
        <PopupWarning />
      </div>
    )
  }
    
  render() {
    const { counter, toggles } = this.props;

    return (
      <div className='action-window'>
        {this.renderPopups()}
        <div className={`action-button action-button--${toggles.actionButton}`}>
          <img className='action-button__image' src={pizza} alt='Pizza' onClick={(e) => {this.addClick()}} />
        </div>
        <div className='user-score'>
          <span className='user-score__value'>{counter.total} Slices</span>
        </div>
        <div className='user-level'>
          <span className='user-level__value'>Level 1</span>
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ counter, toggles }) => {
  return { counter, toggles };
};

export default connect(mapStateToProps, {
  incrementClicks,
  toggleSoundChomp
})(GameWindow);
