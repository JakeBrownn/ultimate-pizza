import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { 
  incrementClicks,
  soundCounter,
  resetSoundCounter
} from '../actions';

import Sidebar from './Sidebar';
import Leaderboard from './Leaderboard';

import pizza from '../assets/images/image-pixel-pizza.png';
import soundChompOne from '../assets/audio/sound-chomp-1.mp3';
import soundChompTwo from '../assets/audio/sound-chomp-2.mp3';


class App extends Component {  
  playSound() {
    const { soundCount } = this.props;
    const soundOne = new Audio(soundChompOne);
    const soundTwo = new Audio(soundChompTwo);

    ( soundCount.val === 1 ) ? soundOne.play() : soundTwo.play();
  };
  
  addClick() {
    const { dispatch, soundCount } = this.props;

    dispatch(incrementClicks());
    dispatch(soundCounter());
    
    if (soundCount.val > 1) {      
      dispatch(resetSoundCounter());
    };
  };
  
  handleClick = () => {
    this.addClick();
    this.playSound();
  };

  render() {     
    return (    
      <div className="app-content">
        <div className="game-screen">
          <div className="action-window">
            <Leaderboard />
            <div className="action-button">
              <img className="action-button__image" onClick={this.handleClick} src={pizza} alt="Pizza" />
            </div>
            <div className="user-score">
              <span className="user-score__value">{this.props.clicks.total} Slices</span>
            </div>
            <div className="user-level">
              <span className="user-level__value">Level {this.props.playerLevel.level}</span>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    clicks: state.counter,
    soundCount: state.soundCount,
    playerLevel: state.level
  };
};

export default connect(mapStateToProps)(App);
