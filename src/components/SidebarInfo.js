import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  playSoundtrack,
  stopSoundtrack,
  openLeaderboard,
  closeLeaderboard,
  openSubmitPopup,
  closeSubmitPopup
} from '../actions';

import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundToggle from '../assets/audio/sound-toggle.mp3';
import SoundOn from '../assets/images/icon-sound-on.jpg';
import SoundOff from '../assets/images/icon-sound-off.jpg';


class SidebarInfo extends Component {
  componentDidMount() {
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    soundtrackMusic.play();
  };

  clickNoise() {
    const toggleSoundEffect = new Audio(SoundToggle);

    toggleSoundEffect.play();
  };

  toggleSound() {
    const { music, dispatch } = this.props;
    const soundtrackMusic = document.getElementById('gameSoundtrack');
    const toggleSoundEffect = new Audio(SoundToggle);

    toggleSoundEffect.play();

    // If the Soundtrack is playing
    if (music.playSoundtrack === true) {

      // Pause the soundtrack
      soundtrackMusic.pause();
      dispatch(stopSoundtrack());

      // Otherwise play the soundtrack
    } else {
      soundtrackMusic.play();
      dispatch(playSoundtrack());
    };
  };

  toggleLeaderboard() {
    const { leaderboard, dispatch } = this.props;
    
    this.clickNoise();

    // If the Leaderboard is not showing
    if ( leaderboard.showLeaderboard === 'hidden' ) {

      // Open the Leaderboard and close the Submit Score popup
      dispatch(openLeaderboard());
      dispatch(closeSubmitPopup());

      // Otherwise close the popup
    } else {
      dispatch(closeLeaderboard());
    };
  };

  toggleSubmitScore(e) {
    const { submitPopup, dispatch } = this.props;

    e.preventDefault();
    this.clickNoise();

    // If the Submit Score popup is not showing
    if ( submitPopup.showSubmitPopup === 'hidden' ) {

      // Open the Submit Score popup and close the Leaderboard
      dispatch(openSubmitPopup());
      dispatch(closeLeaderboard());

      // Otherwise close the Submit Score popup
    } else {
      dispatch(closeSubmitPopup());
    };
  };

  render() {
    const { music } = this.props;

    return (
      <div className='sidebar-info'>
        <div className='sidebar-info__row'>
          <form className='submit-form'>
            <input className='submit-form__input' placeholder='Username' type='text' value='' />
            <input className='submit-form__button' type='submit' value='Submit'  onClick={(e) => { this.toggleSubmitScore(e) }} />
          </form>
        </div>
        <div className='sidebar-info__row'>
          <div className='sidebar-option sidebar-option--sound' onClick={() => { this.toggleSound() }}>
            <audio id='gameSoundtrack'>
              <source src={gameSoundtrack} type='audio/mpeg' />
            </audio> 
            { music.playSoundtrack === true ? <img src={SoundOn} alt='Sound On' /> : <img src={SoundOff} alt='Sound Off' /> }
          </div>
          <div className='sidebar-option sidebar-option--leaderboard' onClick={() => { this.toggleLeaderboard(); }}>
            <span className='sidebar-option__text'>The Leaderboards</span>
          </div>
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ music, leaderboard, submitPopup }) => {
  return { music, leaderboard, submitPopup };
};

export default connect(mapStateToProps)(SidebarInfo);
