import axios from 'axios';

import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL,
  SUBMIT_FEEDBACK,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL
} from './types';

// User is typing in Username field
export const usernameChanged = (text) => {
  return (dispatch) => {
    dispatch({ type: USERNAME_CHANGED, payload: text });
  }
};

// User attempts to submit their Score
export const submitScore = (player) => async (dispatch) => {
  dispatch({ type: SUBMIT_SCORE });

  // If User Score has successfully submitted
  try {
    const res = await axios.post('/api/player', player);
    console.log('success!');
    dispatch({ type: SUBMIT_SCORE_SUCCESS });
  }

  // If User Score has failed to submit
  catch(error) {
    console.log('nope!');
  }
};

// User Score has failed to submit
export const submitScoreFail = (error) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE_FAIL, payload: error });
  }
};

// User attempts to submit Feedback
export const submitFeedback = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK });
  }
};

// User feedback has been successfully submitted
export const submitFeedbackSuccess = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK_SUCCESS });
  }
};

// User feedback has failed to submit
export const submitFeedbackFail = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK_FAIL });
  }
};