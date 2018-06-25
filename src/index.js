import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import './assets/styles/main.min.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root-app'));
registerServiceWorker();
