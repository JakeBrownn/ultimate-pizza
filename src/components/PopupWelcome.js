import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  startGame
} from '../actions';

class PopupWelcome extends Component {
  onInputChange(e) {
    console.log(e);
  }

  handleFormSubmit(e) {
    const { startGame } = this.props;

    e.preventDefault();
    startGame();
  }

  render() {
    const { toggles } = this.props;

    return (
      <div className={`user-popup user-popup--${toggles.userPopupClass}`} onSubmit={(e) => this.handleFormSubmit(e)}>
        <form className='form form--popup' id='welcome-form'>
          <span className='form__text'>Welcome to Ultimate Pizza! An awesome game that'll keep you entertained for hours.</span>
          <span className='form__text'>Enter a Username to get started....</span>
          <input 
            className='form__field' 
            type='text'
            placeholder='Username' 
            autoFocus 
            autoComplete='off'
            onChange={(e) => this.onInputChange(e)}
          />
          <input class='button' type='submit' value="Let's Go" />
        </form>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};


export default connect(mapStateToProps, {
  startGame
})(PopupWelcome);
