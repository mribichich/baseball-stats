import React from 'react';
import {connect} from 'react-redux'

import {highlightPlayer} from './actions';

import TopStatsCards from './TopStatsCards';
import TableStats from './TableStats';
import PlayerSelection from './PlayerSelection';
import MinimumAtBatsSelection from './MinimumAtBatsSelection';

const Home = ({players, stats, selectedPlayer, onClickHandler, onPlayerSelect}) => {
  return (
    <div>
      <MinimumAtBatsSelection onClickHandler={onClickHandler} />

      <PlayerSelection
        players={players}
        handleSelect={onPlayerSelect} />

      <TopStatsCards
        stats={stats}
        selectedPlayer={selectedPlayer} />

      <br/>

      <TableStats stats={stats} selectedPlayer={selectedPlayer}></TableStats>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {players: state.players}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerSelected: (number) => {
      // dispatch(highlightPlayer(number))
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;