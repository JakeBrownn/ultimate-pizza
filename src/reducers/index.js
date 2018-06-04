import { combineReducers } from 'redux';

import {
  ClickReducer,
  SoundCountReducer,
  SoundtrackReducer,
  LeaderboardReducer,
  SubmitPopupReducer
} from './UserReducers';

import {
  BuyUpgradeReducer,
} from './ShopReducers';

// Combine all Reducers in to one
const reducers = combineReducers({
  counter: ClickReducer,
  soundCount: SoundCountReducer,
  purchased: BuyUpgradeReducer,
  music: SoundtrackReducer,
  leaderboard: LeaderboardReducer,
  submitPopup: SubmitPopupReducer
});

export default reducers;
