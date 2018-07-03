import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
} from '../actions';

import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundToggle from '../assets/audio/sound-toggle.mp3';
import SoundOn from '../assets/images/icon-sound-on.png';
import SoundOff from '../assets/images/icon-sound-off.png';
import SidebarOption from './SidebarOption';


class SidebarOptions extends Component {
  componentDidMount() {
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    soundtrackMusic.play();
  }

  // Setup 'click' sound effect
  clickNoise() {
    const toggleSoundEffect = new Audio(SoundToggle);

    toggleSoundEffect.play();
  }

  // Toggle the Soundtrack 
  handleSoundClick() {
    const { toggles, toggleSoundtrack } = this.props;
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    // Call Redux action
    toggleSoundtrack();

    // 'Click' sound effect
    this.clickNoise();

    // Handle play / pause for the game Soundtrack  
    (toggles.playSoundtrack === true) ? soundtrackMusic.pause() : soundtrackMusic.play();
  }

  // Toggle the Music button
  toggleSoundButton() {
    const { playSoundtrack } = this.props.toggles;

    if (playSoundtrack === false) {
      return (
        <div className='sidebar-option__wrapper'>
          <img className='sidebar-option__icon' src={SoundOff} alt='Sound Off' />
          <span className='sidebar-option__text'>Music Off</span>
        </div>
      );
    }

    return (
      <div className='sidebar-option__wrapper'>
        <img className='sidebar-option__icon' src={SoundOn} alt='Sound On' />
        <span className='sidebar-option__text'>Music On</span>
      </div>
    );
  }

  toggleSubmitScore(e) {
    e.preventDefault();

    this.clickNoise();
    this.props.toggleSubmitPopup();
  }

  handleLeaderboardClick(e) {
    e.preventDefault();

    this.clickNoise();
    this.props.toggleLeaderboard(e);
  }

  render() {    
    return (
      <div className='sidebar-buttons'>
        <div className='sidebar-buttons__row'>

        </div>
        <div className='sidebar-buttons__row'>
          <SidebarOption 
            className='sound'
            triggerAction={() => this.handleSoundClick()
          }>
            <audio id='gameSoundtrack'><source src={gameSoundtrack} type='audio/mpeg' /></audio> 
            {this.toggleSoundButton()}
          </SidebarOption>
          {/* <div className='sidebar-option sidebar-option--leaderboard' onClick={(e) => this.handleLeaderboardClick(e)}>
            <span className='sidebar-option__text'>The Leaderboards</span>
          </div> */}
        </div>
      </div>
    );
  }
};

// Map State from Redux Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

export default connect(mapStateToProps, {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
})(SidebarOptions);
