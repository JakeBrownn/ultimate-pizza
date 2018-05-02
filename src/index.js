import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 

import reducers from './reducers';
import App from './components/App';
import './assets/styles/main.min.css';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root-app'));
registerServiceWorker();
