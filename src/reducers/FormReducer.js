import {
  USERNAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  playerUsername: ''
};

export const FormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, playerUsername: action.payload };
    default:
      return state;
  }
};

export default FormReducer;