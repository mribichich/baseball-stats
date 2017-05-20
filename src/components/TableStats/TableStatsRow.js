import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const playerSelectedStyle = {
  color: 'blue'
}

const cellStyle = {
  paddingLeft: 12,
  paddingRight: 12,
}

const nameCellStyle = {
  ...cellStyle,
  width: 180
}

const TableStatsRow = ({stats, selectedPlayer}) => {
  let tableRowStyles;

  if (selectedPlayer && selectedPlayer.number === stats.number) {
    tableRowStyles = playerSelectedStyle;
  }

  return (
    <TableRow style={tableRowStyles}>
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
      <TableRowColumn style={cellStyle}>{stats.walksAvg.toFixed(3).slice(1)}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.strikeOuts}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.strikeOutsAvg.toFixed(3).slice(1)}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.rbi}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.runs}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.avg.toFixed(3).slice(1)}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.obp.toFixed(3).slice(1)}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.slg.toFixed(3).slice(1)}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.stolenBases}</TableRowColumn>
      {/*<TableRowColumn style={cellStyle}>{stats.stolenBasesAttempts}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{stats.stolenBasesAvg}</TableRowColumn>*/}
    </TableRow>
  );
}

export default TableStatsRow;