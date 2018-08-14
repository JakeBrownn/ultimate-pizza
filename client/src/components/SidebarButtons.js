import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import SidebarRow from './SidebarRow';
import {
  toggleSoundtrack,
  toggleLeaderboard,
  toggleSubmitPopup,
  toggleFeedbackPopup
} from '../actions';
import gameSoundtrack from '../assets/audio/soundtrack-main.mp3';
import IconSoundOn from '../assets/images/icon-sound-on.png';
import IconSoundOff from '../assets/images/icon-sound-off.png';
import IconSave from '../assets/images/icon-save.png';
import IconHeart from '../assets/images/icon-heart.png';

class SidebarOptions extends Component {
  constructor(props) {
    super(props);
    this.soundButtonClick = this.soundButtonClick.bind(this);
  }
  
  // Toggle the Soundtrack 
  soundButtonClick() {
    const { playSoundtrack } = this.props.toggles;
    const soundtrackMusic = document.getElementById('gameSoundtrack');

    this.props.toggleSoundtrack();

    // Handle play / pause for the game Soundtrack  
    (playSoundtrack === true) ? soundtrackMusic.pause() : soundtrackMusic.play();
  }

  // Toggle contents of the Music button
  renderSoundButton() {
    const { playSoundtrack } = this.props.toggles;
    const soundButtonIcon = (playSoundtrack === false ? IconSoundOff : IconSoundOn );
    const soundButtonText = (playSoundtrack === false ? 'Off' : 'On' );

    return (
      <React.Fragment>
        <audio id='gameSoundtrack'><source src={gameSoundtrack} type='audio/mpeg' /></audio> 
        <img className='sidebar-option__icon' src={soundButtonIcon} alt='Sound Off' />
        <span className='sidebar-option__text'>Music {soundButtonText}</span>
      </React.Fragment>
    );
  }

  // Toggle Submit Score Popup  
  renderSubmitPopup() {
    this.props.toggleSubmitPopup();
  }

  // Toggle Leaderboard Popup    
  renderLeaderboard() {
    this.props.toggleLeaderboard();
  }

  // Toggle Feedback Popup    
  renderFeedbackPopup() {
    this.props.toggleFeedbackPopup();
  }

  render() {    
    return (
      <div className='sidebar-buttons'>
        <SidebarRow>
          <Button whenClicked={(e) => this.soundButtonClick(e)}>
            {this.renderSoundButton()}
          </Button>
          <Button 
            type='icon' 
            buttonIcon={IconSave}
            buttonText='End Session'
            whenClicked={() => this.renderSubmitPopup()}
          />
          <Button 
            type='icon' 
            buttonIcon={IconHeart}
            buttonText='Feedback'
            whenClicked={() => this.renderFeedbackPopup()}
          />
        </SidebarRow>
        <SidebarRow>
          <Button 
            type='text' 
            className='leaderboard' 
            whenClicked={() => this.renderLeaderboard()}
          >
            Leaderboards
          </Button>
        </SidebarRow>
        <SidebarRow>
          <Button type='link' linkURL='https://github.com/JakeBrownn/ultimate-pizza'>
            GitHub Repo
          </Button>
          <Button type='text'>Game Info</Button>
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
  toggleSubmitPopup,
  toggleFeedbackPopup
})(SidebarOptions);
