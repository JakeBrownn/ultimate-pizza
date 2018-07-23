import React, { Component } from 'react';
import { connect } from 'react-redux';

import ThumbUp from '../assets/images/thumb-up.png';
import ThumbUpFill from '../assets/images/thumb-up-fill.png';
import ThumbDown from '../assets/images/thumb-down.png';
import ThumbDownFill from '../assets/images/thumb-down-fill.png';


class PopupFeedback extends Component {
  toggleThumbUp() {
    
  }
  
  toggleThumbDown() {

  }


  render() {

    return (
      <div className='feedback-popup'>
        <div className='feedback-popup__wrapper'>
          <h2 className='title title--popup'>Submit your feedback</h2>
          <form className='feedback-popup__form'>
            <div className='feedback-popup__radio-buttons'>
              <img className='feedback-popup__thumb feedback-popup__thumb--up' 
                src={ThumbUp} 
                alt='Good' 
                onClick={(e) => (e.currentTarget.src = ThumbUpFill)}
                onMouseEnter={(e) => (e.currentTarget.src = ThumbUpFill)}
                onMouseLeave={(e) => (e.currentTarget.src = ThumbUp)}
              />
              <img className='feedback-popup__thumb feedback-popup__thumb--down' 
                src={ThumbDown} 
                alt='Good' 
                onMouseEnter={(e) => (e.currentTarget.src = ThumbDownFill)}
                onMouseLeave={(e) => (e.currentTarget.src = ThumbDown)}
                onClick={(e) => (e.currentTarget.src = ThumbDownFill)}
              />
            </div>
            <textarea className='feedback-popup__text-field' placeholder='Tell us why?' />          
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