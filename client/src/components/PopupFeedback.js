import React, { Component } from 'react';
import { connect } from 'react-redux';


class PopupFeedback extends Component {
  render() {
    const { feedbackPopup } = this.props.toggles;

    return (
      <div className={`feedback-popup feedback-popup--${feedbackPopup}`}>
        <div className='feedback-popup__wrapper'>
          <form className='feedback-popup__form'>
            <div classname='feedback-popup__radio-buttons'>

            </div>
            <textarea className='feedback-popup__text-field' placeholder='Write your comments here...' />          
            <button className='feedback-popup__submit' type='submit'>Submit Feedback</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ toggles }) => {
  return { toggles };
}

export default connect(mapStateToProps, {})(PopupFeedback);