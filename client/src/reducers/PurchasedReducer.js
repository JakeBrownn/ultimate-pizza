import {
  UNLOCK_ITEM_DESC,
  BUY_DELIVERY_MAN,
  BUY_EXTRA_CHEESE
} from '../actions/types';

const INITIAL_STATE = {
  deliveryMan: 0,
  extraCheese: 0,
  infoUnlocked: []
};

export const PurchasedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UNLOCK_ITEM_DESC:
      return { ...state, infoUnlocked: [...state.infoUnlocked, action.payload] }
    case BUY_DELIVERY_MAN:
      return { ...state, deliveryMan: state.deliveryMan + 1 }
    case BUY_EXTRA_CHEESE: 
      return { ...state, extraCheese: state.extraCheese + 1 }
    default: 
      return state;
  }
};
