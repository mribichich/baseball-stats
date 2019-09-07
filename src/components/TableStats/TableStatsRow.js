import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
      <TableCell style={cellStyle}>{stats.number}</TableCell>
      <TableCell style={nameCellStyle}>{stats.name}</TableCell>
      <TableCell style={cellStyle}>{stats.plateAppearances}</TableCell>
      <TableCell style={cellStyle}>{stats.atBats}</TableCell>
      <TableCell style={cellStyle}>{stats.hits}</TableCell>
      <TableCell style={cellStyle}>{stats.singles}</TableCell>
      <TableCell style={cellStyle}>{stats.doubles}</TableCell>
      <TableCell style={cellStyle}>{stats.triples}</TableCell>
      <TableCell style={cellStyle}>{stats.home_runs}</TableCell>
      <TableCell style={cellStyle}>{stats.runsOverErrors}</TableCell>
      <TableCell style={cellStyle}>{stats.hitByPitch}</TableCell>
      <TableCell style={cellStyle}>{stats.sac_flies}</TableCell>
      <TableCell style={cellStyle}>{stats.sac_hits}</TableCell>
      <TableCell style={cellStyle}>{stats.walks}</TableCell>
      <TableCell style={cellStyle}>{stats.walksAvg.toFixed(3).slice(1)}</TableCell>
      <TableCell style={cellStyle}>{stats.strikeOuts}</TableCell>
      <TableCell style={cellStyle}>{stats.strikeOutsAvg.toFixed(3).slice(1)}</TableCell>
      <TableCell style={cellStyle}>{stats.rbi}</TableCell>
      <TableCell style={cellStyle}>{stats.runs}</TableCell>
      <TableCell style={cellStyle}>{stats.avg.toFixed(3).slice(1)}</TableCell>
      <TableCell style={cellStyle}>{stats.obp.toFixed(3).slice(1)}</TableCell>
      <TableCell style={cellStyle}>{stats.slg.toFixed(3).slice(1)}</TableCell>
      <TableCell style={cellStyle}>{stats.stolenBases}</TableCell>
      {/*<TableCell style={cellStyle}>{stats.stolenBasesAttempts}</TableCell>
      <TableCell style={cellStyle}>{stats.stolenBasesAvg}</TableCell>*/}
    </TableRow>
  );
}

export default TableStatsRow;