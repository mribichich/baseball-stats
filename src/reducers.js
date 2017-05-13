import { combineReducers } from 'redux';
import * as _ from 'lodash';

import { LOAD_PLAYERS, HIGHLIGHT_PLAYER, SET_STATS, SET_MIN_PA } from './actions';

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

function minimumPlateAppearances(state = 0, action) {
		switch (action.type) {
				case SET_STATS:
						return parseInt(_.maxBy(action.stats.map(m => m.plateAppearances)) * 0.30, 0);

				default:
						return state
		}
}

function selectedMinimunPlateAppearances(state = null, action) {
		switch (action.type) {
				case SET_MIN_PA:
						return action.min;

				default:
						return state
		}
}

const reducers = combineReducers({
	players,
	highlightPlayer,
	stats,
	minimumPlateAppearances,
	selectedMinimunPlateAppearances,
});

export default reducers