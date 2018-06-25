import { combineReducers } from 'redux';

import {
  ClickReducer,
  UserToggles,
} from './UserReducers';

import {
  BuyUpgradeReducer,
} from './ShopReducers';

const reducers = combineReducers({
  counter: ClickReducer,
  purchased: BuyUpgradeReducer,
  toggles: UserToggles
});

export default reducers;
