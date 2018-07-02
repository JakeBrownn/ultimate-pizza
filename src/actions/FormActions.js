import {
  USERNAME_CHANGED,
  SUBMIT_SCORE
} from './types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const SubmitScore = () => (dispatch) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SCORE });
  }
}

export const SubmitScoreSuccess = () => {
  return (dispatch) => {

  }
}