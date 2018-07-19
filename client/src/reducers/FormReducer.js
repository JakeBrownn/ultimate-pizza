import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL,
  FETCH_LEADERBOARD,
  FETCH_LEADERBOARD_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  playerUsername: '',
  error: '',
  loading: false,
  fetchingData: false,
  submitSuccess: false,
  leaderboardData: null
};

export const FormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, playerUsername: action.payload };
    case SUBMIT_SCORE:
      return { ...state, loading: true };
    case SUBMIT_SCORE_SUCCESS:
      return { ...state, loading: false, submitSuccess: true };
    case SUBMIT_SCORE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FETCH_LEADERBOARD:
      return { ...state, fetchingData: true };
    case FETCH_LEADERBOARD_SUCCESS:
      return { ...state, fetchingData: false, leaderboardData: action.payload };
    default:
      return state;
  }
};

export default FormReducer;