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
import IconSoundOn from '../assets/images/icon-sound-on.png';
import IconSoundOff from '../assets/images/icon-sound-off.png';
import IconFeedback from '../assets/images/icon-feedback.png';
import IconHeart from '../assets/images/icon-heart.png';


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
    const soundImage = (playSoundtrack === false ? IconSoundOff : IconSoundOn );
    const soundText = (playSoundtrack === false ? 'Off' : 'On' );

    return (
      <div className='sidebar-option__wrapper sidebar-option__wrapper--sound'>
        <audio id='gameSoundtrack'><source src={gameSoundtrack} type='audio/mpeg' /></audio> 
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
            type='icon' 
            className='sound' 
            onClick={(e) => this.handleSoundButton(e)}
          >
            {this.toggleSoundButton()}
          </Button>
          <Button type='icon'>
            <img className='sidebar-option__icon' src={IconFeedback} alt='Ink & Quill' />
            <span className='sidebar-option__text'>Updates</span>
          </Button>
          <Button type='icon'>
            <img className='sidebar-option__icon' src={IconHeart} alt='Heart' />
            <span className='sidebar-option__text'>Feedback</span>
          </Button>
        </SidebarRow>
        <SidebarRow>
          <Button className='leaderboard' onClick={(e) => this.handleLeaderboardClick(e)}>
            Leaderboards
          </Button>
        </SidebarRow>
        <SidebarRow>
          <Button type='link' linkURL='https://github.com/JakeBrownn/ultimate-pizza'>
            GitHub Repo
          </Button>
          <Button>
            Game Info
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
