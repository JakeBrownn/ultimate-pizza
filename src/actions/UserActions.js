import {
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  PLAY_SOUNDTRACK,
  STOP_SOUNDTRACK,
  OPEN_LEADERBOARD,
  CLOSE_LEADERBOARD,
  OPEN_SUBMIT_POPUP,
  CLOSE_SUBMIT_POPUP
} from './types';

export const incrementClicks = (click) => {
  return {
    type: INCREMENT_CLICK,
    payload: click
  }
};

export const soundCounter = (count) => {
  return {
    type: INCREMENT_SOUND_COUNTER,
    payload: count
  }
};

export const resetSoundCounter = (val) => {
  return {
    type: RESET_SOUND_COUNTER,
    payload: val
  }
}; 

export const openLeaderboard = (toggle) => {
  return {
    type: OPEN_LEADERBOARD,
    payload: toggle
  }
};

export const closeLeaderboard = (toggle) => {
  return {
    type: CLOSE_LEADERBOARD,
    payload: toggle
  }
};

export const openSubmitPopup = (toggle) => {
  return {
    type: OPEN_SUBMIT_POPUP,
    payload: toggle
  }
};

export const closeSubmitPopup = (toggle) => {
  return {
    type: CLOSE_SUBMIT_POPUP,
    payload: toggle
  }
};

export const playSoundtrack = (toggle) => {
  return {
    type: PLAY_SOUNDTRACK,
    payload: toggle
  }
};

export const stopSoundtrack = (toggle) => {
  return {
    type: STOP_SOUNDTRACK,
    payload: toggle
  }
};
