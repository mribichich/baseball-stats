import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = window.$ = $;
// require('bootstrap');

import App from './App';
import reducers from './reducers'
import DATA_CSV from './data/dataCsv';
import { convertStats } from './data/converter';
import { loadPlayers, setStats, setMinimunPlateAppearances } from './actions';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const stats = convertStats(DATA_CSV);
const players = _.orderBy(stats.map(m => ({number: m.number, name: m.name})), (m) => m.name);
const minimumPlateAppearances = parseInt(_.maxBy(stats.map(m => m.plateAppearances)) * 0.30, 0);

let store = createStore(reducers);

store.dispatch(loadPlayers(players));
store.dispatch(setStats(stats));
store.dispatch(setMinimunPlateAppearances(minimumPlateAppearances));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
