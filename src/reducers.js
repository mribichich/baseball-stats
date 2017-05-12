import { combineReducers } from 'redux';

import { LOAD_PLAYERS, HIGHLIGHT_PLAYER, SET_STATS } from './actions';

function players(state = [], action) {
		switch (action.type) {
				case LOAD_PLAYERS:
						return [...action.players]

				default:
						return state
		}
}

function stats(state = [], action) {
		switch (action.type) {
				case SET_STATS:
						return [...action.stats]

				default:
						return state
		}
}

function highlightPlayer(state=null, action) {
		switch (action.type) {
				case HIGHLIGHT_PLAYER:
						return action.player

				default:
						return state
		}
}

const reducers = combineReducers({
	players,
	highlightPlayer,
	stats
});

export default reducers