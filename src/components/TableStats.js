import React, {Component} from 'react';
import * as _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import TableStatsRow from './TableStatsRow';

const cellStyle = {
  'padding-left': 12,
  'padding-right': 12,
}

const nameCellStyle = {
  ...cellStyle,
  width: 150
}

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
      <div style={{margin: '20px'}}>
      <Table>
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'number')}>N</TableHeaderColumn>
            <TableHeaderColumn style={nameCellStyle} onClick={(e) => this.handleOnClick(e, 'name')}>Name</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'plateAppearances')}>PA</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'atBats')}>AB</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'hits')}>H</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'singles')}>1B</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'doubles')}>2B</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'triples')}>3B</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'home_runs')}>HR</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'runsOverErrors')}>ROE</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'hitByPitch')}>HBP</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'sac_flies')}>SF</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'sac_hits')}>SAC</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'walks')}>BB</TableHeaderColumn>
            {/*<TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'walksAvg')}>BB %</TableHeaderColumn>*/}
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'strikeOuts')}>SO</TableHeaderColumn>
            {/*<TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'strikeOutsAvg')}>SO %</TableHeaderColumn>*/}
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'rbi')}>RBI</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'runs')}>RUNS</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'avg')}>AVG</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'obp')}>OBP</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'slg')}>SLG</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'stolenBases')}>SB</TableHeaderColumn>
            {/*<TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'stolenBasesAttempts')}>SB Attempts</TableHeaderColumn>
            <TableHeaderColumn style={cellStyle} onClick={(e) => this.handleOnClick(e, 'stolenBasesAvg')}>SB %</TableHeaderColumn>*/}
          </TableRow>
        </TableHeader>

        <TableBody>
          {this
            .state
            .stats
            .map(m => <TableStatsRow
              key={m.number}
              stats={m}
              selectedPlayer={this.props.selectedPlayer}/>)}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default TableStats;