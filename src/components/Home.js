import React from 'react';
import { connect } from 'react-redux';

import TopStatsCards from './TopStatsCards';
import TableStats from './TableStats/TableStats';
import PlayerSelection from '../containers/PlayerSelection';
import MinimumAtBatsSelection from '../containers/MinimumAtBatsSelection';
import Layout from './Layout';
import Flex from './Flex';

import { highlightPlayer } from '../actions';

const filterStats = (stats, selectedMinimumAtBats) => {
  return selectedMinimumAtBats
    ? [...stats.filter(f => f.plateAppearances >= selectedMinimumAtBats)]
    : stats;
}

const Home = ({
  stats, 
  highlightPlayer, 
  selectedMinimumPlateAppearances,
}) => {
  const filteredStats = filterStats(stats, selectedMinimumPlateAppearances);

  return (
    <div>
      <Layout type="row" style={{margin: '0 20px 20px 20px'}}>
       <Flex style={{flexGrow: 0}}>
          <MinimumAtBatsSelection    />
       </Flex>

       <Flex style={{flexGrow: 0, marginLeft: 20}}>
          <PlayerSelection />
       </Flex>
     </Layout>

      <TopStatsCards
        stats={filteredStats}
        selectedPlayer={highlightPlayer} />

      <br />

      <TableStats stats={filteredStats} selectedPlayer={highlightPlayer}></TableStats>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
    highlightPlayer: state.highlightPlayer,
    selectedMinimumPlateAppearances: state.selectedMinimumPlateAppearances || state.minimumPlateAppearances,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerSelected: (player) => {
      dispatch(highlightPlayer(player))
    },
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;