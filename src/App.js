// @flow

import './App.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as _ from 'lodash';
import {BrowserRouter, Route} from 'react-router-dom';

import DATA_CSV from './data/dataCsv';
import { convertStats } from './data/converter';
import Home from './components/Home';
import { loadPlayers, setStats } from './actions';

class App extends Component {
  stats;
  players;

  static contextTypes = {
        store: PropTypes.object
    }

  componentWillMount() {
    this.stats = convertStats(DATA_CSV);

    this.players = _.orderBy(this.stats.map(m => ({number: m.number, name: m.name})), (m) => m.name);

    this.context.store.dispatch(loadPlayers(this.players));
    this.context.store.dispatch(setStats(this.stats));

    
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <h2 className="app__header">Estadisticas A3 2017</h2>

            <Route path='/' component={Home} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;