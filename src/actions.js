export const LOAD_PLAYERS = 'LOAD_PLAYERS';
export const HIGHLIGHT_PLAYER = 'HIGHLIGHT_PLAYER';
export const SET_STATS = 'SET_STATS';

export function loadPlayers(players) {
  return { type: LOAD_PLAYERS, players }
}

export function setStats(stats) {
  return { type: SET_STATS, stats }
}

export function highlightPlayer(player) {
   return { type: HIGHLIGHT_PLAYER, player }
}