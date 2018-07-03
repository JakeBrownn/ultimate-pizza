import {
  INCREMENT_CLICK,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_SOUNDTRACK,
  TOGGLE_ITEM_INFO,
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

// Toggle Item Info in Sidebar
export const toggleItemInfo = (item) => ({ type: TOGGLE_ITEM_INFO, payload: item });

// Begin Session
export const startGame = () => (dispatch) => dispatch({ type: START_GAME });
