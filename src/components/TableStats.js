import './TableStats.css';

import React, {Component} from 'react';
import * as _ from 'lodash';

import TableStatsRow from './TableStatsRow';

class TableStats extends Component {
  componentWillMount() {
    const orderedStats = _.orderBy(this.props.stats, m => m.avg, 'desc');

    this.setState({stats: orderedStats})
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const orderedStats = _.orderBy(nextProps.stats, m => m.avg, 'desc');

    this.setState({stats: orderedStats})
  }

  handleOnClick(e, column) {
    const order = column === this.state.column
      ? this.state.order === 'desc'
        ? 'asc'
        : 'desc'
      : 'desc';

    const orderedStats = _.orderBy(this.props.stats, m => m[column], order);

    this.setState({stats: orderedStats, column: column, order: order});
  }

  render() {
    return (
      <table className="tableStats__table table ">
        <thead>
          <tr>
            <th onClick={(e) => this.handleOnClick(e, 'number')}>N</th>
            <th onClick={(e) => this.handleOnClick(e, 'name')}>Name</th>
            <th onClick={(e) => this.handleOnClick(e, 'plateAppearances')}>PA</th>
            <th onClick={(e) => this.handleOnClick(e, 'atBats')}>AB</th>
            <th onClick={(e) => this.handleOnClick(e, 'hits')}>H</th>
            <th onClick={(e) => this.handleOnClick(e, 'singles')}>1B</th>
            <th onClick={(e) => this.handleOnClick(e, 'doubles')}>2B</th>
            <th onClick={(e) => this.handleOnClick(e, 'triples')}>3B</th>
            <th onClick={(e) => this.handleOnClick(e, 'home_runs')}>HR</th>
            <th onClick={(e) => this.handleOnClick(e, 'runsOverErrors')}>ROE</th>
            <th onClick={(e) => this.handleOnClick(e, 'hitByPitch')}>HBP</th>
            <th onClick={(e) => this.handleOnClick(e, 'sac_flies')}>SF</th>
            <th onClick={(e) => this.handleOnClick(e, 'sac_hits')}>SAC</th>
            <th onClick={(e) => this.handleOnClick(e, 'walks')}>BB</th>
            <th onClick={(e) => this.handleOnClick(e, 'walksAvg')}>BB %</th>
            <th onClick={(e) => this.handleOnClick(e, 'strikeOuts')}>SO</th>
            <th onClick={(e) => this.handleOnClick(e, 'strikeOutsAvg')}>SO %</th>
            <th onClick={(e) => this.handleOnClick(e, 'rbi')}>RBI</th>
            <th onClick={(e) => this.handleOnClick(e, 'runs')}>RUNS</th>
            <th onClick={(e) => this.handleOnClick(e, 'avg')}>AVG</th>
            <th onClick={(e) => this.handleOnClick(e, 'obp')}>OBP</th>
            <th onClick={(e) => this.handleOnClick(e, 'slg')}>SLG</th>
            <th onClick={(e) => this.handleOnClick(e, 'stolenBases')}>SB</th>
            <th onClick={(e) => this.handleOnClick(e, 'stolenBasesAttempts')}>SB Attempts</th>
            <th onClick={(e) => this.handleOnClick(e, 'stolenBasesAvg')}>SB %</th>
          </tr>
        </thead>

        <tbody>
          {this
            .state
            .stats
            .map(m => <TableStatsRow
              key={m.number}
              stats={m}
              selectedPlayer={this.props.selectedPlayer}/>)}
        </tbody>
      </table>

    );
  }
}

export default TableStats;