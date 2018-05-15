import { 
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  LEVEL_UP,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE,
  PLAY_SOUNDTRACK,
  STOP_SOUNDTRACK,
  OPEN_LEADERBOARD,
  CLOSE_LEADERBOARD
} from '../actions/types';

const INITIAL_STATE = {
  total: 500,
  val: 1,
  level: 1,
  playSoundtrack: true,
  showLeaderboard: 'hidden'
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

export const LevelUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LEVEL_UP:
      return { level: state.level + 1 }
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

export const LeaderboardReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case OPEN_LEADERBOARD:
      return { showLeaderboard: 'visibile'  };
    case CLOSE_LEADERBOARD:
      return { showLeaderboard: 'hidden' };
    default:
      return state;
  }
};