import {
  INCREMENT_CLICK,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_FEEDBACK_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
  USERNAME_ERROR,
  START_GAME_ANIMATIONS,
  START_GAME,
  UNLOCK_ITEM_DESC,
  LEADERBOARD_POSITION
} from './types';

// Increment Clicks
export const incrementClicks = () => (dispatch) => dispatch({ type: INCREMENT_CLICK });

// Set counter to toggle between Chomp sounds
export const toggleSoundChomp = () => (dispatch) => dispatch({ type: TOGGLE_SOUND_CHOMP }); 

// Play / Pause the Soundtrack
export const toggleSoundtrack = () => (dispatch) => dispatch({ type: TOGGLE_SOUNDTRACK });

// Toggle Leaderboard
export const toggleLeaderboard = () => (dispatch) => dispatch({ type: TOGGLE_LEADERBOARD });

// Toggle SubmitPopup
export const toggleSubmitPopup = () => (dispatch) => dispatch({ type: TOGGLE_SUBMIT_POPUP });

// Toggle FeedbackPopup
export const toggleFeedbackPopup = () => (dispatch) => dispatch({ type: TOGGLE_FEEDBACK_POPUP });

// Toggle Item Info in Sidebar
export const toggleItemInfo = (item) => ({ type: TOGGLE_ITEM_INFO, payload: item });

// Show error if Username is not correct format
export const usernameError = (error) => {
  return (dispatch) => {
    dispatch({ type: USERNAME_ERROR, payload: error });
  }
};

// Animate-out Welcome Screen
export const startGameAnimations = () => (dispatch) => dispatch({ type: START_GAME_ANIMATIONS });

// Begin Session
export const startGame = () => (dispatch) => dispatch({ type: START_GAME });

export const unlockItemDesc = (itemTitle) => {
  return (dispatch) => {
    dispatch({ type: UNLOCK_ITEM_DESC, payload: itemTitle })
  }
}

// Set User Leaderboard Position
export const setLeaderboardPos = (pos) => {
  return (dispatch) => {
    dispatch({ type: LEADERBOARD_POSITION, payload: pos })
  }
}