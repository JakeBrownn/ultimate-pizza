import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSubmitPopup, submitScore } from '../actions';


class PopupWarning extends Component {

  // When 'Cancel' is clicked
  submitCancelled(e) {
    e.preventDefault();
    
    this.props.toggleSubmitPopup();
  }

  // When 'End Game' is clicked
  submitConfirmed(e) {
    e.preventDefault();
    
    const { total, playerUsername } = this.props;
    
    // Create player object with data from props
    const player = {
      username: form.playerUsername,
      score: counter.total
    };

    this.props.submitScore(player);
  }

  render() {   
    const { toggles } = this.props;
  
    return (
      <div className={`submit-score submit-score--${toggles.submitPopup}`}>
        <div className='submit-score__wrapper'>
          <h2 className='submit-score__title'>End Game Session?</h2>
          <p className='submit-score__text'>Submitting your score will end your current session and rank you on our leaderboards.</p>
          <p className='submit-score__text'>You will not keep your total slices once submitted.</p>
          <p className='submit-score__text'>Do you want to submit your score?</p>
          <form className='submit-score__buttons-wrapper'>
            <input className='submit-score__button no' value='Cancel' type='submit' onClick={(e) => this.submitCancelled(e)} />
            <input className='submit-score__button yes' value='End Game' type='submit' onClick={(e) => this.submitConfirmed(e)} />
          </form>
        </div>
      </div>
    );
  }
};

// Map State from Redux Store into Props
const mapStateToProps = ({ toggles, form, counter }) => {
  return { toggles, form, counter };
};

export default connect(mapStateToProps, {
  toggleSubmitPopup,
  submitScore
})(PopupWarning);
