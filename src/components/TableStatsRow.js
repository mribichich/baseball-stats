import './TableStatsRow.css';

import React, {Component} from 'react';

class TableStatsRow extends Component {
  render() {
    const stats = this.props.stats;

    let selectedPlayerClass;

    if (this.props.selectedPlayer && this.props.selectedPlayer.number === stats.number) {
      selectedPlayerClass = 'TableStatsRow__playerSelected';
    }

    return (
      <tr className={selectedPlayerClass}>
        <td>{stats.number}</td>
        <td>{stats.name}</td>
        <td>{stats.plateAppearances}</td>
        <td>{stats.atBats}</td>
        <td>{stats.hits}</td>
        <td>{stats.singles}</td>
        <td>{stats.doubles}</td>
        <td>{stats.triples}</td>
        <td>{stats.home_runs}</td>
        <td>{stats.runsOverErrors}</td>
        <td>{stats.hitByPitch}</td>
        <td>{stats.sac_flies}</td>
        <td>{stats.sac_hits}</td>
        <td>{stats.walks}</td>
        <td>{stats.walksAvg}</td>
        <td>{stats.strikeOuts}</td>
        <td>{stats.strikeOutsAvg}</td>
        <td>{stats.rbi}</td>
        <td>{stats.runs}</td>
        <td>{stats.avg}</td>
        <td>{stats.obp}</td>
        <td>{stats.slg}</td>
        <td>{stats.stolenBases}</td>
        <td>{stats.stolenBasesAttempts}</td>
        <td>{stats.stolenBasesAvg}</td>
      </tr>
    );
  }
}

export default TableStatsRow;