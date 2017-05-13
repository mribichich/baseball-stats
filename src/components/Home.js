import React from 'react';
import { connect } from 'react-redux';

import TopStatsCards from './TopStatsCards';
import TableStats from './TableStats';
import PlayerSelection from './PlayerSelection';
import MinimumAtBatsSelection from './MinimumAtBatsSelection';
import Layout from './Layout';
import Flex from './Flex';

import { highlightPlayer, setMinimunPlateAppearances } from '../actions';

const filterStats = (stats, selectedMinimumAtBats) => {
  return selectedMinimumAtBats
    ? [...stats.filter(f => f.plateAppearances >= selectedMinimumAtBats)]
    : stats;
}

const Home = ({
  players, 
  stats, 
  highlightPlayer, 
  minimumPlateAppearances, 
  selectedMinimumPlateAppearances, 
  onPlayerSelected, 
  onMinimumPlateAppearancesSelected
}) => {
  const min = selectedMinimumPlateAppearances || minimumPlateAppearances;
  const filteredStats = filterStats(stats, min);

  return (
    <div>
      <Layout type="row" style={{margin: '0 20px 20px 20px'}}>
       <Flex style={{flexGrow: 0}}>
          <MinimumAtBatsSelection min={minimumPlateAppearances} onChanged={(value)=> onMinimumPlateAppearancesSelected(value)} />
       </Flex>

       <Flex style={{flexGrow: 0, marginLeft: 20}}>
          <PlayerSelection
            players={players}
            selectedPlayer={highlightPlayer}
            handleSelect={onPlayerSelected} />
       </Flex>
     </Layout>

      <TopStatsCards
        stats={filteredStats}
        selectedPlayer={highlightPlayer} />

      <br/>

      <TableStats stats={filteredStats} selectedPlayer={highlightPlayer}></TableStats>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    highlightPlayer: state.highlightPlayer,
    stats: state.stats,
    minimumPlateAppearances: state.minimumPlateAppearances,
    selectedMinimumPlateAppearances: state.selectedMinimunPlateAppearances,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerSelected: (player) => {
      dispatch(highlightPlayer(player))
    },
    onMinimumPlateAppearancesSelected: (min) => {
      dispatch(setMinimunPlateAppearances(min))
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;