import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSubmitPopup, submitScore } from '../actions';


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
    
    switch(true) {
      case loading:
        return <p>loading...</p>
      case submitSuccess:
        return <p>Success!</p>
      default:
        return (
          <div className='submit-score__wrapper'>
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
    const { submitPopup } = this.props.toggles;
  
    return (
      <div className={`submit-score submit-score--${submitPopup}`}>
        {this.renderPopupContent()}
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
})(PopupSubmitScore);
