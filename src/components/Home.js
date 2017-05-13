import React from 'react';
import { connect } from 'react-redux';

import { highlightPlayer, setStats } from '../actions';

import TopStatsCards from './TopStatsCards';
import TableStats from './TableStats';
import PlayerSelection from './PlayerSelection';
import MinimumAtBatsSelection from './MinimumAtBatsSelection';
import Layout from './Layout';
import Flex from './Flex';

  const filterStats=(stats, selectedMinimumAtBats)=> {
    return selectedMinimumAtBats
      ? [...stats.filter(f => f.plateAppearances >= selectedMinimumAtBats)]
      : stats;
  }

const Home = ({players, stats, highlightPlayer, onPlayerSelected, onStatsFiltered}) => {
  const onClickHandler=(value)=> {
    const filteredStats = filterStats(stats, value);

   onStatsFiltered(filteredStats);
  }

  return (
    <div>
      <Layout type="row" style={{margin: '0 20px 20px 20px'}}>
       <Flex style={{flexGrow: 0}}>
          <MinimumAtBatsSelection  onClickHandler={(value)=> onClickHandler(value)} />
       </Flex>

       <Flex style={{flexGrow: 0, marginLeft: 20}}>
          <PlayerSelection
            players={players}
            selectedPlayer={highlightPlayer}
            handleSelect={onPlayerSelected} />
       </Flex>
     </Layout>

      <TopStatsCards
        stats={stats}
        selectedPlayer={highlightPlayer} />

      <br/>

      <TableStats stats={stats} selectedPlayer={highlightPlayer}></TableStats>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    highlightPlayer: state.highlightPlayer,
    stats: state.stats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerSelected: (player) => {
      dispatch(highlightPlayer(player))
    },
    onStatsFiltered: (stats) => {
      dispatch(setStats(stats))
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;