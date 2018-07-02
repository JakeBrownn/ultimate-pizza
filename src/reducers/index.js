import { combineReducers } from 'redux';

import { ClickReducer } from './ClickReducer';
import { TogglesReducer } from './TogglesReducer';
import { PurchasedReducer } from './PurchasedReducer';

const reducers = combineReducers({
  counter: ClickReducer,
  purchased: PurchasedReducer,
  toggles: TogglesReducer
});

export default reducers;
