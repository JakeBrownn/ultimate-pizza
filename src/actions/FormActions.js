import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL
} from './types';

// When User is typing in Username field
export const usernameChanged = (text) => (dispatch) => dispatch({ type: USERNAME_CHANGED, payload: text });

// Submit User Score
export const SubmitScore = () => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE });
  }
}

// Upon Successful Submission
export const SubmitScoreSuccess = () => (dispatch) => dispatch({ type: SUBMIT_SCORE_SUCCESS });

// Upon Failed Submission
export const SubmitScoreFail = (error) => (dispatch) => dispatch({ type: SUBMIT_SCORE_FAIL, payload: error });
