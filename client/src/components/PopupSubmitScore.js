import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerSummary from './PlayerSummary';

import { toggleSubmitPopup, submitScore } from '../actions';

import LoadingSpinner from '../assets/images/loading-spinner.svg';
// import EndGameImage from '../assets/images/hotline-bling.gif';


class PopupSubmitScore extends Component {

  // When 'Cancel' is clicked
  submitCancelled(e) {
    e.preventDefault();
    
    this.props.toggleSubmitPopup();
  }

  // When 'End Game' is clicked
  submitConfirmed(e) {
    e.preventDefault();
    
    const { form, counter } = this.props;
    
    // Create player object with data from props
    const player = {
      username: form.playerUsername,
      score: counter.total
    };

    this.props.submitScore(player);
  }

  // Render loading spinner
  renderPopupContent() {
    const { loading, submitSuccess } = this.props.form;
    const innerWrapper = 'submit-score__wrapper';
    
    switch(true) {

      // Display loading animation whilst Score is submitting
      case loading:
        return (
          <div className='submit-score__loading-wrapper'>
            <img className='submit-score__loading-image' src={LoadingSpinner} alt='Loading' />
          </div>
        );

      // When Score has been successfully submitted
      case submitSuccess:
        return (
          <div className={innerWrapper}>
            <p className='title title--popup'>Thanks for playing Ultimate Pizza!</p>
            <p className='submit-score__text'>You placed <span></span> on our Leaderboards</p>
            <PlayerSummary />
            {/* <img className='submit-score__ending-image' src={EndGameImage} alt='Hotline Bling!' />   */}
            <div className='submit-score__buttons-row'>
              <a className='submit-score__button' href='' onClick={() => window.location.hrefsdg} >Back To Menu</a>
              <a 
                className='submit-score__button' 
                href='https://github.com/JakeBrownn/ultimate-pizza' 
                target='_blank'
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
          </div>
        );
            
      default:
        return (
          <div className={innerWrapper}>
            <h2 className='title title--popup'>End Game Session?</h2>
            <p className='submit-score__text'>Submitting your score will end your current session and rank you on our leaderboards.</p>
            <p className='submit-score__text'>You will not keep your total slices once submitted.</p>
            <p className='submit-score__text'>Do you want to submit your score?</p>
            <form className='submit-score__buttons-wrapper'>
              <input className='submit-score__button no' value='Cancel' type='submit' onClick={(e) => this.submitCancelled(e)} />
              <input className='submit-score__button yes' value='End Game' type='submit' onClick={(e) => this.submitConfirmed(e)} />
            </form>
          </div>
        );
    }
  }

  render() {     
    return (
      <div className='submit-score'>
        {this.renderPopupContent()}
      </div>
    );
  }
};

// Map State from Redux Store into Props
const mapStateToProps = ({ form, counter }) => {
  return { form, counter };
};

export default connect(mapStateToProps, {
  toggleSubmitPopup,
  submitScore
})(PopupSubmitScore);
