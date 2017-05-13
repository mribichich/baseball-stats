import './TableStatsRow.css';

import React, {Component} from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const cellStyle = {
  paddingLeft: 12,
  paddingRight: 12,
}

const nameCellStyle = {
  ...cellStyle,
  width: 150
}

class TableStatsRow extends Component {
  render() {
    const stats = this.props.stats;

    let selectedPlayerClass;

    if (this.props.selectedPlayer && this.props.selectedPlayer.number === stats.number) {
      selectedPlayerClass = 'TableStatsRow__playerSelected';
    }

    return (
      <TableRow className={selectedPlayerClass}>
        <TableRowColumn style={cellStyle}>{stats.number}</TableRowColumn>
        <TableRowColumn style={nameCellStyle}>{stats.name}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.plateAppearances}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.atBats}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.hits}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.singles}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.doubles}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.triples}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.home_runs}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.runsOverErrors}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.hitByPitch}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.sac_flies}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.sac_hits}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.walks}</TableRowColumn>
        {/*<TableRowColumn style={cellStyle}>{stats.walksAvg}</TableRowColumn>*/}
        <TableRowColumn style={cellStyle}>{stats.strikeOuts}</TableRowColumn>
        {/*<TableRowColumn style={cellStyle}>{stats.strikeOutsAvg}</TableRowColumn>*/}
        <TableRowColumn style={cellStyle}>{stats.rbi}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.runs}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.avg}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.obp}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.slg}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.stolenBases}</TableRowColumn>
        {/*<TableRowColumn style={cellStyle}>{stats.stolenBasesAttempts}</TableRowColumn>
        <TableRowColumn style={cellStyle}>{stats.stolenBasesAvg}</TableRowColumn>*/}
      </TableRow>
    );
  }
}

export default TableStatsRow;