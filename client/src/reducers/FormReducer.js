import {
  USERNAME_CHANGED,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL,
  LEADERBOARD_DATA,
  LEADERBOARD_POSITION
} from '../actions/types';

const INITIAL_STATE = {
  playerUsername: '',
  error: '',
  loading: false,
  submitSuccess: false,
  leaderboardPos: 0,
  leaderboardData: []
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
    case LEADERBOARD_DATA:
      return { ...state, leaderboardData: action.payload };
    case LEADERBOARD_POSITION:
      return { ...state, leaderboardPos: action.payload };
    default:
      return state;
  }
};

export default FormReducer;
