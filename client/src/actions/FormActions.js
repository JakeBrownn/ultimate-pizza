// import axios from 'axios';

import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL,
  SUBMIT_FEEDBACK,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL
} from './types';

// When User is typing in Username field
export const usernameChanged = (text) => {
  return (dispatch) => {
    dispatch({ type: USERNAME_CHANGED, payload: text });
  }
};

// Called when a User attempts to submit their Score
export const submitScore = (player) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE });
  }
};

// Called when a Users' Score has been successfully submitted
export const submitScoreSuccess = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE_SUCCESS });
  }
};

// Called when a Users' Score has failed to submit
export const submitScoreFail = (error) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE_FAIL, payload: error });
  }
};

// Called when a User attempts to submit Feedback
export const submitFeedback = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK });
  }
};

// When a Users feedback has been successfully submitted
export const submitFeedbackSuccess = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK_SUCCESS });
  }
};

// When a Users feedback has failed to submit
export const submitFeedbackFail = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FEEDBACK_FAIL });
  }
};