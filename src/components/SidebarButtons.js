import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
} from '../actions';

import Button from './Button';
import SidebarRow from './SidebarRow';
import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundToggle from '../assets/audio/sound-toggle.mp3';
import SoundOn from '../assets/images/icon-sound-on.png';
import SoundOff from '../assets/images/icon-sound-off.png';


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
    const { playSoundtrack } = this.props.toggles;
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    // Call Redux action
    this.props.toggleSoundtrack();

    // 'Click' sound effect
    this.clickNoise();

    // Handle play / pause for the game Soundtrack  
    (playSoundtrack === true) ? soundtrackMusic.pause() : soundtrackMusic.play();
  }

  // Toggle the Music button
  toggleSoundButton() {
    const { playSoundtrack } = this.props.toggles;

    if (playSoundtrack === false) {
      return (
        <div className='sidebar-option__wrapper sidebar-option__wrapper--sound'>

        </div>
      );
    }

    return (
      <div className='sidebar-option__wrapper sidebar-option__wrapper--sound'>
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
        <SidebarRow>
          <Button className='sound' triggerAction={() => this.handleSoundClick()}>
            <audio id='gameSoundtrack'><source src={gameSoundtrack} type='audio/mpeg' /></audio> 
            <img className='sidebar-option__icon' src={SoundOff} alt='Sound Off' />
            <span className='sidebar-option__text'>Music Off</span>
          </Button>
          <Button className='' triggerAction={() => console.log(123)}>
            Hello!
          </Button>
          <Button className='' triggerAction={() => console.log(123)}>
            Button 3!
          </Button>
        </SidebarRow>
        <SidebarRow>
          <Button className='leaderboard' triggerAction={(e) => this.handleLeaderboardClick(e)}>
            <span className='sidebar-option__text'>Leaderboards</span>
          </Button>
        </SidebarRow>
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
