import {
  BUY_DELIVERY_MAN,
  BUY_EXTRA_CHEESE,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE
} from './types';

export const buyDeliveryMan = (toggle) => {
  return {
    type: BUY_DELIVERY_MAN,
    payload: toggle 
  }
};

export const activateDeliveryMan = (toggle) => {
  return {
    type: ACTIVATE_DELIVERY_MAN,
    payload: toggle
  }
};

export const buyExtraCheese = (val) => {
  return {
    type: BUY_EXTRA_CHEESE,
    payload: val 
  }
};

export const activateExtraCheese = (toggle) => {
  return {
    type: ACTIVATE_EXTRA_CHEESE,
    payload: toggle
  }
};

export const intervalExtraCheese = (toggle) => {
  return {
    type: INTERVAL_EXTRA_CHEESE,
    payload: toggle
  }
};