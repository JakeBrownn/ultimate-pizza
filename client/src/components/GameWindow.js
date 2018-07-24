import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import WelcomeScreen from './WelcomeScreen';
import PopupSubmitScore from './PopupSubmitScore';
import PopupLeaderboard from './PopupLeaderboard';
import PopupFeedback from './PopupFeedback';
import { incrementClicks, toggleSoundChomp, unlockItemDesc } from '../actions';
import pizza from '../assets/images/image-pixel-pizza.png';
import soundChompOne from '../assets/audio/sound-chomp-1.mp3';
import soundChompTwo from '../assets/audio/sound-chomp-2.mp3';
import { itemOne, itemTwo, itemThree } from '../data';

class GameWindow extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // Handle onClick of Pizza
  handleClick() {
    const { toggles, toggleSoundChomp, incrementClicks } = this.props;
    const soundOne = new Audio(soundChompOne);
    const soundTwo = new Audio(soundChompTwo);
    
    toggleSoundChomp();
    incrementClicks();
    this.checkItemDesc(itemOne);
    this.checkItemDesc(itemTwo);
    this.checkItemDesc(itemThree);

    // Alternate between two Chomp sounds
    ( toggles.chompSound === 1 ) ? soundOne.play() : soundTwo.play();
  }

  checkItemDesc(item) {
    const { total } = this.props.counter;
    const { infoUnlocked } = this.props.purchased;

    // If slices total is 1/4 of the item cost & infoUnlocked array does not contain the item title 
    if ((item.cost * 0.25) <= total && (!infoUnlocked.includes(item.title))) {

      // Add the item title to the infoUnlocked array
      this.props.unlockItemDesc(item.title);
    }
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
        { toggles.gameStarted === false && (
          <WelcomeScreen />
        )}
        <div className={actionBtnClassName}>
          <img className='action-button__image' src={pizza} alt='Pizza' onClick={this.handleClick} />
        </div>
        <div className='user-score'>
          <span className='user-score__value'>{counter.total} Slices</span>
        </div>
        <div className='user-level'>
          <span className='user-level__value'>Level 1</span>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ counter, toggles, purchased }) => {
  return { counter, toggles, purchased };
};

export default connect(mapStateToProps, {
  incrementClicks,
  toggleSoundChomp,
  unlockItemDesc
})(GameWindow);
