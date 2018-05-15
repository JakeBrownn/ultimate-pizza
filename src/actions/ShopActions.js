import {
  BUY_DELIVERY_MAN,
  BUY_EXTRA_CHEESE,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE
} from './types';

export const buyDeliveryMan = ( val ) => {
  return {
    type: BUY_DELIVERY_MAN,
    payload: val 
  }
};

export const activateDeliveryMan = ( val ) => {
  return {
    type: ACTIVATE_DELIVERY_MAN,
    payload: val
  }
};

export const buyExtraCheese = ( val ) => {
  return {
    type: BUY_EXTRA_CHEESE,
    payload: val 
  }
};

export const activateExtraCheese = ( val ) => {
  return {
    type: ACTIVATE_EXTRA_CHEESE,
    payload: val
  }
};

export const intervalExtraCheese = ( val ) => {
  return {
    type: INTERVAL_EXTRA_CHEESE,
    payload: val
  }
};