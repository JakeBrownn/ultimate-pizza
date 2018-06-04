import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { 
  incrementClicks,
  soundCounter,
  resetSoundCounter
} from '../actions';

import Sidebar from './Sidebar';
import SubmitScore from './SubmitScore';
import Leaderboard from './Leaderboard';

import pizza from '../assets/images/image-pixel-pizza.png';
import soundChompOne from '../assets/audio/sound-chomp-1.mp3';
import soundChompTwo from '../assets/audio/sound-chomp-2.mp3';


class App extends Component {

  // Handle 'click' sound  
  playSound() {
    const { soundCount } = this.props;
    const soundOne = new Audio(soundChompOne);
    const soundTwo = new Audio(soundChompTwo);

    ( soundCount.val === 1 ) ? soundOne.play() : soundTwo.play();
  };
  
  // Handle add 'click'
  addClick() {
    const { dispatch, soundCount } = this.props;

    dispatch(incrementClicks());
    dispatch(soundCounter());
    
    if (soundCount.val > 1) {      
      dispatch(resetSoundCounter());
    };
  };
  
  // Handle 'click' functions
  handleClick = () => {
    this.addClick();
    this.playSound();
  };

  render() {        
    const { counter } = this.props;

    return (    
      <div className='app-content'>
        <div className='game-screen'>
          <div className='action-window'>
            <Leaderboard />
            <SubmitScore />
            <div className='action-button'>
              <img className='action-button__image' onClick={this.handleClick} src={pizza} alt='Pizza' />
            </div>
            <div className='user-score'>
              <span className='user-score__value'>{counter.total} Slices</span>
            </div>
            <div className='user-level'>
              <span className='user-level__value'>Level 1</span>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    );
  };
};

// Map State from Store into Props
const mapStateToProps = ({ counter, soundCount }) => {
  return { counter, soundCount };
};

export default connect(mapStateToProps)(App);
