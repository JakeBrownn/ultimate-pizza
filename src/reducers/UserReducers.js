import { 
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE,
  PLAY_SOUNDTRACK,
  STOP_SOUNDTRACK,
  TOGGLE_LEADERBOARD,
  OPEN_SUBMIT_POPUP,
  CLOSE_SUBMIT_POPUP
} from '../actions/types';

const INITIAL_STATE = {
  total: 249,
  val: 1,
  playSoundtrack: true,
  showLeaderboard: false,
  showSubmitPopup: null
};

const itemBonus = {
  deliveryMan: 2,
  extraCheese: 1
};

const itemPrice = {
  deliveryMan: 100,
  extraCheese: 150
};

export const ClickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_CLICK:
      return { total: state.total + 1 };
    case ACTIVATE_DELIVERY_MAN: 
      return { 
        ...state, 
        total: state.total * itemBonus.deliveryMan - itemPrice.deliveryMan,
      };
    case ACTIVATE_EXTRA_CHEESE: 
      return {
        ...state,
        total: state.total - itemPrice.extraCheese
      };
    case INTERVAL_EXTRA_CHEESE:
      return {
        ...state,
        total: state.total + itemBonus.extraCheese
      };
    default: 
      return state;
  }
};

export const SoundCountReducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case INCREMENT_SOUND_COUNTER:
      return { val: state.val + 1 };
    case RESET_SOUND_COUNTER: 
      return { val: 1 };
    default: 
      return state;
  }
};

export const SoundtrackReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PLAY_SOUNDTRACK:
      return { playSoundtrack: true };
    case STOP_SOUNDTRACK: 
      return { playSoundtrack: false }
    default:
      return state;
  }
};

export const PopupReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_LEADERBOARD:
      return { showLeaderboard: !state.showLeaderboard  };
    default:
      return state;
  }
};

export const SubmitPopupReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case OPEN_SUBMIT_POPUP:
      return { showSubmitPopup: 'visibile'  };
    case CLOSE_SUBMIT_POPUP:
      return { showSubmitPopup: 'hidden' };
    default:
      return state;
  }
};