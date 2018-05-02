import {
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  LEVEL_UP
} from './types';

export const incrementClicks = (click) => {
  return {
    type: INCREMENT_CLICK,
    payload: click
  };
};

export const soundCounter = (count) => {
  return {
    type: INCREMENT_SOUND_COUNTER,
    payload: count
  };
};

export const resetSoundCounter = (e) => {
  return {
    type: RESET_SOUND_COUNTER,
    payload: e
  };
}; 

export const levelUp = (e) => {
  return {
    type: LEVEL_UP,
    payload: e
  };
};