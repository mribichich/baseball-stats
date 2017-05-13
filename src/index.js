import './index.css';

// import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import $ from 'jquery';
// window.jQuery = window.$ = $;
// require('bootstrap');

import App from './App';
import reducers from './reducers'

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
