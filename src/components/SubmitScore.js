import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeSubmitPopup } from '../actions';

class SubmitScore extends Component {
  handeNoButton(e) {
    e.preventDefault();

    this.props.dispatch(closeSubmitPopup());
  };

  handleYesButton(e) {
    e.preventDefault();
  };

  render() {
    const { submitPopup } = this.props;
    
    return (
      <div className={'submit-score ' + submitPopup.showSubmitPopup}>
        <div className='submit-score__wrapper'>
          <h2 className='submit-score__title'>Warning</h2>
          <p className='submit-score__text'>Submitting your score will end your current session and rank you on our leaderboards... if you're lucky.</p>
          <p className='submit-score__text'>You will not keep your total slices once submitted.</p>
          <p className='submit-score__text'>Do you want to submit your score?</p>
          <form className='submit-score__buttons-wrapper'>
            <input className='submit-score__button no' onClick={(e) => this.handeNoButton(e)} type='submit' value='Not Yet...' />
            <input className='submit-score__button yes' onClick={(e) => this.handleYesButton(e)} type='submit' value='Yes Do It !!!' />
          </form>
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ submitPopup }) => {
  return { submitPopup };
};

export default connect(mapStateToProps)(SubmitScore);
