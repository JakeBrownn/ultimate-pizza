import {
  INCREMENT_CLICK,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_SOUNDTRACK
} from './types';

// Increment Clicks
export const incrementClicks = () => (dispatch) => dispatch({ type: INCREMENT_CLICK });

// Set counter to toggle between Chomp sounds
export const toggleSoundChomp = () => (dispatch) => dispatch({ type: TOGGLE_SOUND_CHOMP }); 

// Toggle Leaderboard ClassName
export const toggleLeaderboard = () => (dispatch) => dispatch({ type: TOGGLE_LEADERBOARD });

// Toggle SubmitPopup ClassName
export const toggleSubmitPopup = () => (dispatch) => dispatch({ type: TOGGLE_SUBMIT_POPUP });

// Play / Pause the Soundtrack
export const toggleSoundtrack = () => (dispatch) => dispatch({ type: TOGGLE_SOUNDTRACK });
