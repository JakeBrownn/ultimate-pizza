import {
  BUY_DELIVERY_MAN,
  BUY_EXTRA_CHEESE,
  ACTIVATE_DELIVERY_MAN,
  ACTIVATE_EXTRA_CHEESE,
  INTERVAL_EXTRA_CHEESE
} from './types';

// Handle purchase of Delivery Man
export const buyDeliveryMan = () => (dispatch) => dispatch({ type: BUY_DELIVERY_MAN });

// Handle purchase of Extra Cheese
export const buyExtraCheese = () => (dispatch) => dispatch({ type: BUY_EXTRA_CHEESE });

// Activate Delivery Man item effect
export const activateDeliveryMan = () => (dispatch) => dispatch({ type: ACTIVATE_DELIVERY_MAN });

// Activate Extra Cheese item effect
export const activateExtraCheese = () => (dispatch) => dispatch({ type: ACTIVATE_EXTRA_CHEESE });

// Called on interval when Extra Cheese is activated
export const intervalExtraCheese = () => (dispatch) => dispatch({ type: INTERVAL_EXTRA_CHEESE });
