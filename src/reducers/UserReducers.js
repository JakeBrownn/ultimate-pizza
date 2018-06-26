import { 
  INCREMENT_CLICK,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE,
  TOGGLE_SOUND_CHOMP,
  TOGGLE_LEADERBOARD,
  TOGGLE_SUBMIT_POPUP,
  TOGGLE_SOUNDTRACK
} from '../actions/types';

const INITIAL_STATE = {
  total: 249,
  chompSound: 1,
  playSoundtrack: true,
  leaderboardClass: 'hidden',
  popupClass: 'hidden'
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
      return { ...state, total: state.total * itemBonus.deliveryMan - itemPrice.deliveryMan };
    case ACTIVATE_EXTRA_CHEESE: 
      return { ...state, total: state.total - itemPrice.extraCheese };
    case INTERVAL_EXTRA_CHEESE:
      return { ...state, total: state.total + itemBonus.extraCheese };
    default: 
      return state;
  }
};

export const UserToggles = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_SOUND_CHOMP: 
      return { ...state, chompSound: ( state.chompSound === 2) ? 1 : 2 }
    case TOGGLE_LEADERBOARD:
      return { ...state, leaderboardClass: ( state.leaderboardClass === 'hidden' ) ? 'visible' : 'hidden' };
    case TOGGLE_SUBMIT_POPUP:
      return { ...state, popupClass: ( state.popupClass === 'hidden' ) ? 'visible' : 'hidden' };
    case TOGGLE_SOUNDTRACK:
      return { ...state, playSoundtrack: !state.playSoundtrack }
    default:
      return state;
  }
};