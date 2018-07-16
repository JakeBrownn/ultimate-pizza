import axios from 'axios';

import {
  USERNAME_CHANGED,
  USERNAME_FAIL,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL
} from './types';

// When User is typing in Username field
export const usernameChanged = (text) => {
  return (dispatch) => {
    dispatch({ type: USERNAME_CHANGED, payload: text });
  }
};

// If User inputs bad Username
export const usernameFail = () => (dispatch) => dispatch({ type: USERNAME_FAIL });

// When User attempts to submit Score
export const submitScore = (player) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE });
  }
};

// When User Score has been successfully submitted
export const submitScoreSuccess = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE_SUCCESS });
  }
};

// When User Score has failed to be submitted
export const submitScoreFail = (error) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE_FAIL, payload: error });
  }
};