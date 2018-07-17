import { 
  HIDDEN,
  VISIBLE,
  ANIMATING,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_FEEDBACK_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
  USERNAME_ERROR,
  START_GAME_ANIMATIONS,
  START_GAME
} from '../actions/types';

const INITIAL_STATE = {
  chompSound: 1,
  playSoundtrack: true,
  leaderboard: HIDDEN,
  submitPopup: HIDDEN,
  feedbackPopup: HIDDEN,
  welcomeScreen: VISIBLE,
  sidebarClass: 'enable-sidebar',
  welcomeScreenContent: 'in-view',
  actionButton: 'off-screen',
  blueBackground: '',
  welcomeMessage: 'Enter a username to start the game.',
  item: { title: '', desc: '', cost: '' }
};

export const TogglesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_LEADERBOARD:
      if ( state.leaderboard === HIDDEN ) {
        return { ...state, leaderboard: VISIBLE, submitPopup: HIDDEN } 
      } else {
        return { ...state, leaderboard: HIDDEN }
      }
    case TOGGLE_SUBMIT_POPUP:
      if ( state.submitPopup === HIDDEN ) {
        return { ...state, submitPopup: VISIBLE, leaderboard: HIDDEN } 
      } else {
        return { ...state, submitPopup: HIDDEN }
      }
    case TOGGLE_FEEDBACK_POPUP: 
      if (state.feedbackPopup === HIDDEN) {
        return { ...state, feedbackPopup: VISIBLE, leaderboard: HIDDEN, submitPopup: HIDDEN }
      } else {
        return { ...state, feedbackPopup: HIDDEN }
      }
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack };
    case TOGGLE_ITEM_INFO: 
      return { ...state, item: ( state.item.title.length === 0 ) ? action.payload : INITIAL_STATE.item };
    case USERNAME_ERROR: 
      return { ...state, welcomeMessage: action.payload }
    case START_GAME_ANIMATIONS:
      return { 
        ...state, 
        welcomeScreenContent: ANIMATING, 
        blueBackground: ANIMATING, 
        sidebarClass: ANIMATING, 
        actionButton: 'fly-in' 
      };
    case START_GAME:
      return { 
        ...state, 
        welcomeScreen: HIDDEN, 
        welcomeScreenContent: HIDDEN, 
        sidebarClass: 'enable-sidebar', 
        actionButton: 'in-view'
      };
    default:
      return state;
  }
};