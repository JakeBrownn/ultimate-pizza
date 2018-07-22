import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import WelcomeScreen from './WelcomeScreen';
import PopupSubmitScore from './PopupSubmitScore';
import PopupLeaderboard from './PopupLeaderboard';
import PopupFeedback from './PopupFeedback';

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
    
    toggleSoundChomp();
    incrementClicks();

    // Alternate between two Chomp sounds
    ( toggles.chompSound === 1 ) ? soundOne.play() : soundTwo.play();
  }

  renderPopups() {
    const { 
      showLeaderboard, 
      showSubmitPopup, 
      showFeedbackPopup 
    } = this.props.toggles;

    switch(true) {
      case showLeaderboard:
        return <PopupLeaderboard />;
      case showSubmitPopup:
        return <PopupSubmitScore />;
      case showFeedbackPopup:
        return <PopupFeedback />;
      default:
        return;
    }
  }
    
  render() {
    const { counter, toggles } = this.props;
    const actionBtnClassName = (`action-button action-button--${toggles.actionButton}`);

    return (
      <div className='action-window'>
        {this.renderPopups()}

        { toggles.gameStarted === false && 
          <WelcomeScreen />
        }
        <div className={actionBtnClassName}>
          <img className='action-button__image' src={pizza} alt='Pizza' onClick={() => {this.addClick()}} />
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
