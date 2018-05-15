import {
  ACTIVATE_DELIVERY_MAN
} from '../actions/types';

const INITIAL_STATE = {
  activateDeliveryMan: false
};

export const ActivateItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVATE_DELIVERY_MAN:
      return { state };
    default:
      return state;
  }
};
