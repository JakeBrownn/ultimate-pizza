import { 
  INCREMENT_CLICK,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE 
} from '../actions/types';

import {
  itemOne,
  itemTwo
} from '../data';

const INITIAL_STATE = {
  total: 249
};

const itemBonus = {
  deliveryMan: 2,
  extraCheese: 1
};

const itemPrice = {
  deliveryMan: itemOne.cost,
  extraCheese: itemTwo.cost
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