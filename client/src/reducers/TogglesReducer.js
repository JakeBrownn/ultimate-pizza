import { 
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_FEEDBACK_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
  START_GAME_ANIMATIONS,
  START_GAME
} from '../actions/types';

const INITIAL_STATE = {
  chompSound: 1,
  playSoundtrack: true,
  leaderboard: 'hidden',
  submitPopup: 'hidden',
  feedbackPopup: 'hidden',
  welcomeScreen: 'visible',
  sidebarClass: 'enable-sidebar',
  welcomeScreenContent: 'in-view',
  actionButton: 'off-screen',
  blueBackground: '',
  item: { title: '', desc: '', cost: '' }
};

export const TogglesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_LEADERBOARD:
      if ( state.leaderboard === 'hidden' ) {
        return {
          ...state,
          leaderboard: 'visible',
          submitPopup: 'hidden'
        } 
      } else {
        return {
          ...state,
          leaderboard: 'hidden'          
        }
      }

    case TOGGLE_SUBMIT_POPUP:
      if ( state.submitPopup === 'hidden' ) {
        return {
          ...state,
          submitPopup: 'visible',
          leaderboard: 'hidden'
        } 
      } else {
        return {
          ...state,
          submitPopup: 'hidden'          
        }
      }
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack };
    case TOGGLE_ITEM_INFO: 
      return { ...state, item: ( state.item.title.length === 0 ) ? action.payload : INITIAL_STATE.item };
    case START_GAME_ANIMATIONS:
      return { 
        ...state, 
        welcomeScreenContent: 'animating', 
        blueBackground: 'animating', 
        sidebarClass: 'animating', 
        actionButton: 'fly-in' 
      };
    case START_GAME:
      return { 
        ...state, 
        welcomeScreen: 'hidden', 
        welcomeScreenContent: 'hidden', 
        sidebarClass: 'enable-sidebar', 
        actionButton: 'in-view'
      };
    default:
      return state;
  }
};