import { combineReducers } from 'redux';

import { 
  INCREMENT_CLICK,
  INCREMENT_SOUND_COUNTER,
  RESET_SOUND_COUNTER,
  LEVEL_UP
} from '../actions/types';

const INITIAL_STATE = {
  total: 500,
  val: 1,
  level: 1
};

const SHOP_INITIAL_STATE = {

};

const ClickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_CLICK:
      return { total: state.total + 1 };
    default: 
      return state;
  }
};

const SoundCountReducer = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case INCREMENT_SOUND_COUNTER:
      return { val: state.val + 1 };
    case RESET_SOUND_COUNTER: 
      return { val: 1 };
    default: 
      return state;
  }
};

const LevelUpReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LEVEL_UP:
      return { level: state.level + 1 }
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: ClickReducer,
  soundCount: SoundCountReducer,
  level: LevelUpReducer
});

export default reducers;
