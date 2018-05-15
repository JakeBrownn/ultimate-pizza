import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  playSoundtrack,
  stopSoundtrack,
  openLeaderboard,
  closeLeaderboard
} from '../actions';

import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import SoundToggle from '../assets/audio/sound-toggle.mp3';
import SoundOn from '../assets/images/icon-sound-on.jpg';
import SoundOff from '../assets/images/icon-sound-off.jpg';

class SidebarInfo extends Component {
  componentDidMount() {
    const soundtrackMusic = document.getElementById("gameSoundtrack");

    soundtrackMusic.play();
  };

  clickNoise() {
    const toggleSoundEffect = new Audio(SoundToggle);

    toggleSoundEffect.play();
  }

  toggleSound() {
    const soundtrackMusic = document.getElementById("gameSoundtrack");
    const toggleSoundEffect = new Audio(SoundToggle);
    const { music } = this.props;

    toggleSoundEffect.play();

    if (music.playSoundtrack === true) {
      soundtrackMusic.pause();
      this.props.dispatch(stopSoundtrack());
    } else {
      soundtrackMusic.play();
      this.props.dispatch(playSoundtrack());
    };
  };

  toggleLeaderboard() {
    const { leaderboard, dispatch } = this.props;
    
    ( leaderboard.showLeaderboard === 'hidden' ) ? dispatch(openLeaderboard()) : dispatch(closeLeaderboard());
  };

  render() {
    const { music } = this.props;
    
    return (
      <div className="sidebar-info">
        <div className="sidebar-option sidebar-option--sound" onClick={() => { this.toggleSound() }}>
          <audio id="gameSoundtrack">
            <source src={gameSoundtrack} type="audio/mpeg" />
          </audio>
          { music.playSoundtrack === true ? <img src={SoundOn} alt="Sound On" /> : <img src={SoundOff} alt="Sound Off" /> }
        </div>
        <div className="sidebar-option sidebar-option--leaderboard" onClick={() => { this.clickNoise(); this.toggleLeaderboard(); }}>
          <span className="sidebar-option__text">The Leaderboards</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    music: state.music,
    leaderboard: state.leaderboard
  }
};

export default connect(mapStateToProps)(SidebarInfo);
