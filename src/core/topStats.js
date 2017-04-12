import * as _ from 'lodash';

export function calculateTopStats(stats) {
  const avgStats = _.orderBy(stats, m => m.avg, 'desc');
  const hitsStats = _.orderBy(stats, m => m.hits, 'desc');
  const runsStats = _.orderBy(stats, m => m.runs, 'desc');
  const rbiStats = _.orderBy(stats, m => m.rbi, 'desc');
  const home_runsStats = _.orderBy(stats, m => m.home_runs, 'desc');
  const doublesStats = _.orderBy(stats, m => m.doubles, 'desc');
  const triplesStats = _.orderBy(stats, m => m.triples, 'desc');
  const obpStats = _.orderBy(stats, m => m.obp, 'desc');
  const slgStats = _.orderBy(stats, m => m.slg, 'desc');
  const stolenBasesStats = _.orderBy(stats, m => m.stolenBases, 'desc');

  return [
    {
      title: 'HITS',
      tops: _
        .take(hitsStats, 5)
        .map(m => map(m, (f) => f.hits))
    }, {
      title: 'RUNS',
      tops: _
        .take(runsStats, 5)
        .map(m => map(m, (f) => f.runs))
    }, {
      title: 'RBI',
      tops: _
        .take(rbiStats, 5)
        .map(m => map(m, (f) => f.rbi))
    }, {
      title: 'DD',
      tops: _
        .take(doublesStats, 5)
        .map(m => map(m, (f) => f.doubles))
    }, {
      title: 'TT',
      tops: _
        .take(triplesStats, 5)
        .map(m => map(m, (f) => f.triples))
    }, {
      title: 'AVG',
      tops: _
        .take(avgStats, 5)
        .map(m => map(m, (f) => f.avg))
    }, {
      title: 'OBP',
      tops: _
        .take(obpStats, 5)
        .map(m => map(m, (f) => f.obp))
    }, {
      title: 'SLG',
      tops: _
        .take(slgStats, 5)
        .map(m => map(m, (f) => f.slg))
    }, {
      title: 'SB',
      tops: _
        .take(stolenBasesStats, 5)
        .map(m => map(m, (f) => f.stolenBases))
    }, {
      title: 'HR',
      tops: _
        .take(home_runsStats, 5)
        .map(m => map(m, (f) => f.home_runs))
    }
  ]
}

function map(stat, valueFunc) {
  return {number: stat.number, name: stat.name, value: valueFunc(stat)};
}