import {
  INCREMENT_CLICK,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_FEEDBACK_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
  START_GAME_ANIMATIONS,
  START_GAME
} from './types';

// Increment Clicks
export const incrementClicks = () => (dispatch) => dispatch({ type: INCREMENT_CLICK });

// Set counter to toggle between Chomp sounds
export const toggleSoundChomp = () => (dispatch) => dispatch({ type: TOGGLE_SOUND_CHOMP }); 

// Toggle Leaderboard ClassName
export const toggleLeaderboard = () => (dispatch) => dispatch({ type: TOGGLE_LEADERBOARD });

// Play / Pause the Soundtrack
export const toggleSoundtrack = () => (dispatch) => dispatch({ type: TOGGLE_SOUNDTRACK });

// Toggle SubmitPopup ClassName
export const toggleSubmitPopup = () => (dispatch) => dispatch({ type: TOGGLE_SUBMIT_POPUP });

// Toggle FeedbackPopup ClassName
export const toggleFeedbackPopup = () => (dispatch) => dispatch({ type: TOGGLE_FEEDBACK_POPUP });

// Toggle Item Info in Sidebar
export const toggleItemInfo = (item) => ({ type: TOGGLE_ITEM_INFO, payload: item });

// Animate-out Welcome Screen
export const startGameAnimations = () => (dispatch) => dispatch({ type: START_GAME_ANIMATIONS });

// Begin Session
export const startGame = () => (dispatch) => dispatch({ type: START_GAME });