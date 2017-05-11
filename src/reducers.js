import {combineReducers} from 'redux'
import {LOAD_PLAYERS} from './actions'
// const {SHOW_ALL} = VisibilityFilters function visibilityFilter(state =
// SHOW_ALL, action) {   switch (action.type) {     case SET_VISIBILITY_FILTER:
//     return action.filter     default:       return state   } }

function players(state = [], action) {
		switch (action.type) {
				case LOAD_PLAYERS:
						return [...action.players]

				default:
						return state
		}
}

const reducers = combineReducers({
		// visibilityFilter,
		players
});

export default reducers