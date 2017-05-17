import React, {Component} from 'react';
import * as _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import TableStatsRow from './TableStatsRow';
import Sort from './Sort';
import {columns} from './columnMapper';

const cellStyle = {
  paddingLeft: 12,
  paddingRight: 12,
}

const nameCellStyle = {
  ...cellStyle,
  width: 150
}

class TableStats extends Component {
  constructor(props) {
    super(props);

    const columnName = 'avg';
    const order = 'desc';

    const orderedStats = _.orderBy(this.props.stats, columnName, order);

    this.state = {
      stats: orderedStats,
      columnName: columnName,
      order: order,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const orderedStats = _.orderBy(nextProps.stats, m => m.avg, 'desc');

    this.setState({stats: orderedStats})
  }

  handleOnClick(e, rowNumber, columnNumber) {
    const columnName = columns[columnNumber - 1].name;

    const order = columnName === this.state.columnName
      ? this.state.order === 'desc'
        ? 'asc'
        : 'desc'
      : 'desc';

    const orderedStats = _.orderBy(this.props.stats, m => m[columnName], order);

    this.setState({stats: orderedStats, columnName: columnName, order: order});
  }

  render() {
    return (
      <div style={{margin: '20px'}}>
      <Table>
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow onCellClick={(event, rowNumber, columnNumber) => this.handleOnClick(event, rowNumber, columnNumber)}>
            {columns.map(m=> (
              <TableHeaderColumn key={m.name} style={m.name === 'name' ? nameCellStyle : cellStyle}>
                <Sort columnName={m.name} columnDesc={m.description} activeSortColumn={this.state.columnName} order={this.state.order} />
              </TableHeaderColumn>
            ))}
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