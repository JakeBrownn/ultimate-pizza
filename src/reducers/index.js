import { combineReducers } from 'redux';

import {
  ClickReducer,
  UserToggles,
} from './UserReducers';

import {
  PurchasedReducer,
} from './ShopReducers';

const reducers = combineReducers({
  counter: ClickReducer,
  purchased: PurchasedReducer,
  toggles: UserToggles
});

export default reducers;
