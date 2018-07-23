import axios from 'axios';

import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL,
  SUBMIT_FEEDBACK,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL,
  LEADERBOARD_DATA
} from './types';

// User is typing in Username field
export const usernameChanged = (text) => (dispatch) => dispatch({ type: USERNAME_CHANGED, payload: text });

// User attempts to submit their Score
export const submitScore = (player) => async (dispatch) => {
  dispatch({ type: SUBMIT_SCORE });

  // If User Score has successfully submitted
  try {
    await axios.post('/api/player', player);

    dispatch({ type: SUBMIT_SCORE_SUCCESS });

  // If User Score has failed to submit
  } catch(error) {
    console.log('nope!');
  }
};

// User Score has failed to submit
export const submitScoreFail = (error) => (dispatch) => dispatch({ type: SUBMIT_SCORE_FAIL, payload: error });

// User attempts to submit Feedback
export const submitFeedback = () => (dispatch) => dispatch({ type: SUBMIT_FEEDBACK });

// User feedback has been successfully submitted
export const submitFeedbackSuccess = () => (dispatch) => dispatch({ type: SUBMIT_FEEDBACK_SUCCESS });

// User feedback has failed to submit
export const submitFeedbackFail = () => (dispatch) => dispatch({ type: SUBMIT_FEEDBACK_FAIL });

export const fetchLeaderboardData = () => async (dispatch) => {
  const res = await axios.get('/api/leaderboard');

  dispatch({ type: LEADERBOARD_DATA, payload: res.data });
}