// @flow

import './App.css';

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as _ from 'lodash';

import DATA_CSV from './data/dataCsv';
import {convertStats} from './data/converter';
import TopStatsCards from './TopStatsCards';
import TableStats from './TableStats';
import PlayerSelection from './PlayerSelection';
import MinimumAtBatsSelection from './MinimumAtBatsSelection';

class App extends Component {
  stats;
  players;

  componentWillMount() {
    this.stats = convertStats(DATA_CSV);

    this.players = _.orderBy(this.stats.map(m => ({number: m.number, name: m.name})), (m) => m.name);

    this.setState({selectedPlayer: null, stats: this.stats})
  }

  filterStats(stats, selectedMinimumAtBats) {
    return selectedMinimumAtBats
      ? [...stats.filter(f => f.atBats >= selectedMinimumAtBats)]
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
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Estadisticas A3 2017</h2>
          </div>
          <MinimumAtBatsSelection onClickHandler={(value) => this.onClickHandler(value)}/>

          <PlayerSelection
            players={this.players}
            handleSelect={(number) => this.handleSelect(number)}/>

          <TopStatsCards
            stats={this.state.stats}
            selectedPlayer={this.state.selectedPlayer}/>
          <br/>
          <TableStats stats={this.state.stats} selectedPlayer={this.state.selectedPlayer}></TableStats>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
