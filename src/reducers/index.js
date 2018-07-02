import { combineReducers } from 'redux';

import { ClickReducer } from './ClickReducer';
import { TogglesReducer } from './TogglesReducer';
import { PurchasedReducer } from './PurchasedReducer';
import { FormReducer } from './FormReducer';

const reducers = combineReducers({
  counter: ClickReducer,
  purchased: PurchasedReducer,
  toggles: TogglesReducer,
  form: FormReducer
});

export default reducers;
