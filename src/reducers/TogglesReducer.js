import { 
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
  START_GAME
} from '../actions/types';

const INITIAL_STATE = {
  chompSound: 1,
  playSoundtrack: true,
  leaderboardClass: 'hidden',
  popupClass: 'hidden',
  welcomeScreen: 'visible',
  sidebarClass: 'disabled',
  item: { 
    title: '', 
    desc: '', 
    cost: '' 
  }
};

export const TogglesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_LEADERBOARD:
      return { ...state, leaderboardClass: ( state.leaderboardClass === 'hidden' ) ? 'visible' : 'hidden' };
    case TOGGLE_SUBMIT_POPUP:
      return { ...state, popupClass: ( state.popupClass === 'hidden' ) ? 'visible' : 'hidden' };
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack };
    case TOGGLE_ITEM_INFO: 
      return { ...state, item: ( state.item.title.length === 0 ) ? action.payload : INITIAL_STATE.item }
    case START_GAME:
      return { ...state, welcomeScreen: 'hidden' };
    default:
      return state;
  }
};