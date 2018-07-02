import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import reducers from './reducers';
import MainApp from './components/MainApp';
import './assets/styles/main.min.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>
, document.getElementById('root-app'));
registerServiceWorker();
