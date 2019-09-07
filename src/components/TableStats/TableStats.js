import React, {Component} from 'react';
import * as _ from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableStatsRow from './TableStatsRow';
import Sort from './Sort';
import {columns} from './columnMapper';

const cellStyle = {
  paddingLeft: 12,
  paddingRight: 12,
}

const nameCellStyle = {
  ...cellStyle,
  width: 180
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

  handleOnClick = columnName => (e)=> {
    // const columnName = columns[columnNumber - 1].name;

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
        <TableHead >
          <TableRow>
            {columns.map(m=> (
              <TableCell key={m.name} style={m.name === 'name' ? nameCellStyle : cellStyle}>
                {/* <Sort columnName={m.name} columnDesc={m.description} activeSortColumn={this.state.columnName} order={this.state.order} /> */}

                <TableSortLabel
              active={this.state.columnName === m.name}
              direction={this.state.order}
              onClick={ this.handleOnClick(m.name)}
            >
              {m.description}
              {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null} */}
            </TableSortLabel>

              </TableCell>
            ))}
          </TableRow>
        </TableHead>

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