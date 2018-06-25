import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
} from '../actions';

import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundToggle from '../assets/audio/sound-toggle.mp3';
import SoundOn from '../assets/images/icon-sound-on.jpg';
import SoundOff from '../assets/images/icon-sound-off.jpg';


class SidebarInfo extends Component {
  componentDidMount() {
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    soundtrackMusic.play();
  }

  // Handle 'click' sound effect
  clickNoise() {
    const toggleSoundEffect = new Audio(SoundToggle);

    toggleSoundEffect.play();
  }

  // Toggle the Soundtrack 
  handleSoundClick() {
    const { toggles } = this.props;
    const toggleSoundEffect = new Audio(SoundToggle);
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    toggleSoundEffect.play();
    this.props.toggleSoundtrack();

    // Handle play / pause for the game Soundtrack  
    (toggles.playSoundtrack === true) ? soundtrackMusic.pause() : soundtrackMusic.play();
  }

  // Toggle the Soundtrack button
  toggleButtonSource() {
    const { toggles } = this.props;

    return (toggles.playSoundtrack === true) ? SoundOn : SoundOff;
  }

  toggleSubmitScore(e) {
    const { toggleSubmitPopup } = this.props;
    e.preventDefault();

    this.clickNoise();
    toggleSubmitPopup();
  }

  handleLeaderboardClick(e) {
    const { toggleLeaderboard } = this.props;
    e.preventDefault();

    this.clickNoise();
    toggleLeaderboard(e);
  }

  render() {    
    return (
      <div className='sidebar-info'>
        <div className='sidebar-info__row'>
          <form className='submit-form'>
            <input className='submit-form__input' placeholder='Username' type='text' value='' />
            <input className='submit-form__button' type='submit' value='Submit'  onClick={(e) => this.toggleSubmitScore(e)} />
          </form>
        </div>
        <div className='sidebar-info__row'>
          <div className='sidebar-option sidebar-option--sound' onClick={() => this.handleSoundClick()}>
            <audio id='gameSoundtrack'>
              <source src={gameSoundtrack} type='audio/mpeg' />
            </audio> 
            <img src={this.toggleButtonSource()} alt='Toggle Sound' />
          </div>
          <div className='sidebar-option sidebar-option--leaderboard' onClick={(e) => this.handleLeaderboardClick(e)}>
            <span className='sidebar-option__text'>The Leaderboards</span>
          </div>
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

export default connect(mapStateToProps, {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
})(SidebarInfo);
