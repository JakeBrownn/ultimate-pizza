import { 
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_SOUNDTRACK,
  START_GAME
} from '../actions/types';

const INITIAL_STATE = {
  total: 249,
  chompSound: 1,
  playSoundtrack: true,
  leaderboardClass: 'hidden',
  popupClass: 'hidden',
  userPopupClass: 'visible'
};

export const TogglesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_LEADERBOARD:
      return { ...state, leaderboardClass: ( state.leaderboardClass === 'hidden' ) ? 'visible' : 'hidden' };
    case TOGGLE_SUBMIT_POPUP:
      return { ...state, popupClass: ( state.popupClass === 'hidden' ) ? 'visible' : 'hidden' };
    case START_GAME:
      return { ...state, userPopupClass: 'hidden' };
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack }
    default:
      return state;
  }
};