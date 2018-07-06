import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import SidebarRow from './SidebarRow';

import {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup
} from '../actions';

import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundOn from '../assets/images/icon-sound-on.png';
import SoundOff from '../assets/images/icon-sound-off.png';


class SidebarOptions extends Component {
  
  // Toggle the Soundtrack 
  handleSoundButton() {
    const { playSoundtrack } = this.props.toggles;
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    // Call Redux action
    this.props.toggleSoundtrack();

    // Handle play / pause for the game Soundtrack  
    (playSoundtrack === true) ? soundtrackMusic.pause() : soundtrackMusic.play();
  }

  // Toggle the Music button
  toggleSoundButton() {
    const { playSoundtrack } = this.props.toggles;
    const soundImage = (playSoundtrack === false ? SoundOff : SoundOn );
    const soundText = (playSoundtrack === false ? 'Off' : 'On' );

    return (
      <div className='sidebar-option__wrapper sidebar-option__wrapper--sound'>
        <img className='sidebar-option__icon' src={soundImage} alt='Sound Off' />
        <span className='sidebar-option__text'>Music {soundText}</span>
      </div>
    );
  }

  // Toggle Submit Score Popup  
  toggleSubmitScore() {
    this.props.toggleSubmitPopup();
  }

  // Toggle Leaderboard Popup    
  handleLeaderboardClick() {
    this.props.toggleLeaderboard();
  }

  render() {    
    return (
      <div className='sidebar-buttons'>
        <SidebarRow>
          <Button 
            className='sound' 
            onClick={(e) => this.handleSoundButton(e)}
            withIcon 
          >
            <audio id='gameSoundtrack'><source src={gameSoundtrack} type='audio/mpeg' /></audio> 
            {this.toggleSoundButton()}
          </Button>
          <Button triggerAction={() => console.log(123)}>
            Hello!
          </Button>
          <Button triggerAction={() => console.log(123)}>
            Button 3!
          </Button>
        </SidebarRow>
        <SidebarRow>
          <Button className='leaderboard' onClick={(e) => this.handleLeaderboardClick(e)}>
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
