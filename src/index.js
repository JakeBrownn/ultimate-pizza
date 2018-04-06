import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import App from './components/App';

const Homepage = () => (
  <div>This is my Homepage</div>
);

const routes = (
  <BrowserRouter>
    <div className="browser-router">
      {/* <Header /> */}
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root-app'));
registerServiceWorker();
