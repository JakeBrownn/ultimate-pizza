import {
  BUY_DELIVERY_MAN,
  BUY_EXTRA_CHEESE
} from '../actions/types';

const INITIAL_STATE = {
  deliveryMan: 0,
  extraCheese: 0
};

export const PurchasedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_DELIVERY_MAN:
      return { ...state, deliveryMan: state.deliveryMan + 1 }
    case BUY_EXTRA_CHEESE: 
      return { ...state, extraCheese: state.extraCheese + 1 }
    default: 
      return state;
  }
};