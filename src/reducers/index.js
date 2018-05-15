import { combineReducers } from 'redux';

import {
  ClickReducer,
  SoundCountReducer,
  LevelUpReducer,
  SoundtrackReducer,
  LeaderboardReducer
} from './UserReducers';

import {
  BuyUpgradeReducer,
} from './ShopReducers';

const reducers = combineReducers({
  counter: ClickReducer,
  soundCount: SoundCountReducer,
  level: LevelUpReducer,
  purchased: BuyUpgradeReducer,
  music: SoundtrackReducer,
  leaderboard: LeaderboardReducer
});

export default reducers;
