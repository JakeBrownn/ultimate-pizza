import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 

import reducers from './reducers';
import GameApp from './components/GameApp';
import './assets/styles/main.min.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GameApp />
  </Provider>
, document.getElementById('root-app'));
registerServiceWorker();
