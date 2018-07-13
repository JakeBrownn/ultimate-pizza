import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSubmitPopup } from '../actions';


class PopupWarning extends Component {

  // When 'No' is clicked
  handeNoButton(e) {
    e.preventDefault();
    
    // Call Redux action
    this.props.toggleSubmitPopup();
  }

  // When 'Yes' is clicked
  handleYesButton(e) {
    e.preventDefault();
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
            <input className='submit-score__button no' value='Cancel' type='submit' onClick={(e) => this.handeNoButton(e)} />
            <input className='submit-score__button yes' value='End Game' type='submit' onClick={(e) => this.handleYesButton(e)} />
          </form>
        </div>
      </div>
    );
  }
};

// Map State from Redux Store into Props
const mapStateToProps = ({ toggles, form }) => {
  return { toggles, form };
};

export default connect(mapStateToProps, {
  toggleSubmitPopup
})(PopupWarning);
