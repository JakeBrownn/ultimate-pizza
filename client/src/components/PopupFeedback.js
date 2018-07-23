import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopupFeedback extends Component {
  generateRatingList() {
    const numberText = ['One', 'Two', 'Three', 'Four', 'Five'];

    return numberText.map((rating, i) => {
      return (
        <div className='feedback-popup__rating-wrapper' key={i}>
          <input className='feedback-popup__radio-input' type='radio' name='rating' id={`rating${numberText[i]}`} />
          <label className='feedback-popup__radio-label' for={`rating${numberText[i]}`}>{i}</label>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='feedback-popup'>
        <div className='feedback-popup__wrapper'>
          <h2 className='title title--popup'>How would you rate this project out of 5?</h2>
          <form className='feedback-popup__form'>
            <div className='feedback-popup__rating-list'>
              {this.generateRatingList()}
            </div>
            <textarea className='feedback-popup__text-field' placeholder='Tell me why?' />          
            <button className='feedback-popup__submit' type='submit'>Send</button>
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