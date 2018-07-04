import { 
  INCREMENT_CLICK,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE 
} from '../actions/types';

import { itemOne, itemTwo } from '../data';

const INITIAL_STATE = {
  total: 249
};

// itemOne
const deliveryMan = {
  cost: itemOne.cost,
  itemBonus: itemOne.itemEffectVal
};

// itemTwo
const extraCheese = {
  cost: itemTwo.cost,
  itemBonus: itemTwo.itemEffectVal
};

export const ClickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_CLICK:
      return { total: state.total + 1 };
    case ACTIVATE_DELIVERY_MAN: 
      return { ...state, total: state.total * deliveryMan.itemBonus - deliveryMan.cost };
    case ACTIVATE_EXTRA_CHEESE: 
      return { ...state, total: state.total - extraCheese.cost };
    case INTERVAL_EXTRA_CHEESE:
      return { ...state, total: state.total + extraCheese.itemBonus };
    default: 
      return state;
  }
};