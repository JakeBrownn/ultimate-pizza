import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import PizzaScreen from './components/screens/pizza-game/PizzaScreen';
import './index.css';

const Homepage = () => (
  <div>This is my Homepage</div>
);

const routes = (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Route exact path="/" component={Homepage} />
      <Route path="/pizza" component={PizzaScreen} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
