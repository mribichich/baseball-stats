import {convertPlayer, convertStats} from './converter';

it('should convert a csv line', () => {
  const csv = `"2,Lares, Andrés",4,2,1,1,0,0,0,1,2,0,0,0,0.000,2,1.000,1,2,0.500,0.750,0.500,0,0,0.000`;

  const player = convertPlayer(csv);

  expect(player).toEqual({
    number: 2,
    name: 'Lares Andrés',
    plateAppearances: 4,
    atBats: 2,
    hits: 1,
    singles: 1,
    doubles: 0,
    triples: 0,
    home_runs: 0,
    runsOverErrors: 1,
    hitByPitch: 2,
    sac_flies: 0,
    sac_hits: 0,
    walks: 0,
    walksAvg: 0,
    strikeOuts: 2,
    strikeOutsAvg: 1,
    rbi: 1,
    runs: 2,
    avg: 0.5,
    obp: 0.75,
    slg: 0.5,
    stolenBases: 0,
    stolenBasesAttempts: 0,
    stolenBasesAvg: 0
  });
});

it('should convert multiple csv lines', () => {
  const csv = `"2,Lares, Andrés",4,2,1,1,0,0,0,1,2,0,0,0,0.000,2,1,000,1,2,0.500,0.750,0.500,0,0,0.000
"7,Ribichich, Matías",12,10,3,2,1,0,0,3,0,0,0,2,0.167,2,0.200,4,3,0.300,0.417,0.400,3,3,1.000
"12,Masso, Franco",0,0,0,0,0,0,0,0,0,0,0,0,0.000,0,0.000,0,0,0.000,0.000,0.000,0,0,0.000`;

  const players = convertStats(csv);

  expect(players.length).toBe(3)
  expect(players[0].name).toBe('Lares Andrés')
  expect(players[1].name).toBe('Ribichich Matías')
  expect(players[2].name).toBe('Masso Franco')
});