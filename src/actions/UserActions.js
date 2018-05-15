import {
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  LEVEL_UP,
  PLAY_SOUNDTRACK,
  STOP_SOUNDTRACK,
  OPEN_LEADERBOARD,
  CLOSE_LEADERBOARD
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

export const levelUp = (e) => {
  return {
    type: LEVEL_UP,
    payload: e
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
