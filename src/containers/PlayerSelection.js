import { connect } from 'react-redux'

import PlayerSelection from '../components/PlayerSelection';
import { highlightPlayer } from '../actions';

const mapStateToProps = (state) => {
  return {
    players: state.players,
    selectedPlayer: state.highlightPlayer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (player) => {
      dispatch(highlightPlayer(player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelection);
