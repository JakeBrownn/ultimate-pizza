import {
  USERNAME_CHANGED,
  USERNAME_FAIL,
  SUBMIT_SCORE,
  SUBMIT_SCORE_SUCCESS,
  SUBMIT_SCORE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  playerUsername: '',
  usernameError: '',
  error: '',
  loading: false,
  submitSuccess: false,
};

export const FormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, playerUsername: action.payload };
    case USERNAME_FAIL:
      return { ...state, usernameError: 'Username must not contain spaces.' }
    case SUBMIT_SCORE:
      return { ...state, loading: true };
    case SUBMIT_SCORE_SUCCESS:
      return { ...state, loading: false, submitSuccess: true };
    case SUBMIT_SCORE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};

export default FormReducer;