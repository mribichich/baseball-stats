export const LOAD_PLAYERS = 'LOAD_PLAYERS';

export function loadPlayers(players) {
  return {type: LOAD_PLAYERS, players}
}
