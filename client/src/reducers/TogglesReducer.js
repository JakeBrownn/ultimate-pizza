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
  showLeaderboard: false,
  showSubmitPopup: false,
  showFeedbackPopup: false,
  gameStarted: false,
  welcomeScreen: VISIBLE,
  sidebarClass: 'hide-sidebar',
  welcomeScreenContent: 'in-view',
  actionButton: 'off-screen',
  blueBackground: '',
  welcomeMessage: 'Enter a username to start the game.',
  welcomeMessageClass: '',
  item: { title: '', desc: '', cost: '' }
};

export const TogglesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_LEADERBOARD:
      if ( state.showLeaderboard === false ) {
        return { ...state, showLeaderboard: true, showSubmitPopup: false, showFeedbackPopup: false } 
      } else {
        return { ...state, showLeaderboard: false }
      }
    case TOGGLE_SUBMIT_POPUP:
      if ( state.showSubmitPopup === false ) {
        return { ...state, showSubmitPopup: true, showLeaderboard: false, showFeedbackPopup: false } 
      } else {
        return { ...state, showSubmitPopup: false }
      }
    case TOGGLE_FEEDBACK_POPUP: 
      if (state.showFeedbackPopup === false) {
        return { ...state, showFeedbackPopup: false, showSubmitPopup: false, showLeaderboard: false }
      } else {
        return { ...state, showFeedbackPopup: false }
      }
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack };
    case TOGGLE_ITEM_INFO: 
      return { ...state, item: ( state.item.title.length === 0 ) ? action.payload : INITIAL_STATE.item };
    case USERNAME_ERROR: 
      return { ...state, welcomeMessage: action.payload, welcomeMessageClass: 'error' }
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
        gameStarted: true,
        welcomeScreen: HIDDEN, 
        welcomeScreenContent: HIDDEN, 
        sidebarClass: 'enable-sidebar', 
        actionButton: 'in-view'
      };
    default:
      return state;
  }
};