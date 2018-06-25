import { combineReducers } from 'redux';

import {
  ClickReducer,
  SoundCountReducer,
  SoundtrackReducer,
  PopupReducer,
  SubmitPopupReducer
} from './UserReducers';

import {
  BuyUpgradeReducer,
} from './ShopReducers';

const reducers = combineReducers({
  counter: ClickReducer,
  soundCount: SoundCountReducer,
  purchased: BuyUpgradeReducer,
  music: SoundtrackReducer,
  popup: PopupReducer,
  submitPopup: SubmitPopupReducer
});

export default reducers;
