// @flow

import './App.css';

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as _ from 'lodash';
import {BrowserRouter, Route} from 'react-router-dom';

import DATA_CSV from './data/dataCsv';
import {convertStats} from './data/converter';
import Home from './Home';
import {loadPlayers} from './actions';

class App extends Component {
  stats;
  players;

static contextTypes = {
        store: React.PropTypes.object
    }

  componentWillMount() {
    this.stats = convertStats(DATA_CSV);

    this.players = _.orderBy(this.stats.map(m => ({number: m.number, name: m.name})), (m) => m.name);

    this.setState({selectedPlayer: null, stats: this.stats})

    this.context.store.dispatch(loadPlayers(this.players));
  }

  filterStats(stats, selectedMinimumAtBats) {
    return selectedMinimumAtBats
      ? [...stats.filter(f => f.plateAppearances >= selectedMinimumAtBats)]
      : stats;
  }

  onClickHandler(value) {
    const stats = this.filterStats(this.stats, value);

    this.setState({stats: stats});
  }

  handleSelect(number) {
    const player = this
      .players
      .find(f => f.number === number);

    this.setState({selectedPlayer: player});
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
              <h2>Estadisticas A3 2017</h2>
            </div>

            <Route
              path='/'
              render={() => ( 
                <Home stats={this.state.stats} 
                  selectedPlayer={this.state.selectedPlayer} 
                  onPlayerSelect={(number) => this.handleSelect(number)} 
                  onClickHandler={(value) => this.onClickHandler(value)} 
                /> 
              )}/>
            {/*<Route path='/address' component={Address} />*/}
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;