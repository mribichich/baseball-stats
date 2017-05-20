import * as _ from 'lodash';

export function calculateTopStats(stats) {
  const avgStats = _.orderBy(stats, m => m.avg, 'desc');
  const hitsStats = _.orderBy(stats, m => m.hits, 'desc');
  const runsStats = _.orderBy(stats, m => m.runs, 'desc');
  const rbiStats = _.orderBy(stats, m => m.rbi, 'desc');
  // const home_runsStats = _.orderBy(stats, m => m.home_runs, 'desc');
  const singlesStats = _.orderBy(stats, m => m.singles, 'desc');
  const doublesStats = _.orderBy(stats, m => m.doubles, 'desc');
  const triplesStats = _.orderBy(stats, m => m.triples, 'desc');
  const obpStats = _.orderBy(stats, m => m.obp, 'desc');
  const slgStats = _.orderBy(stats, m => m.slg, 'desc');
  const stolenBasesStats = _.orderBy(stats, m => m.stolenBases, 'desc');
  const walksStats = _.orderBy(stats, m => m.walks, 'desc');
  const strikeOutsStats = _.orderBy(stats, m => m.strikeOuts, 'desc');

  return [
    {
      title: 'HITS',
      tops: _
        .take(hitsStats, 5)
        .map(m => map(m, (f) => f.hits.toFixed(0))),
    }, {
      title: 'RUNS',
      tops: _
        .take(runsStats, 5)
        .map(m => map(m, (f) => f.runs.toFixed(0))),
    }, {
      title: 'RBI',
      tops: _
        .take(rbiStats, 5)
        .map(m => map(m, (f) => f.rbi.toFixed(0))),
    }, {
      title: '1B',
      tops: _
        .take(singlesStats, 5)
        .map(m => map(m, (f) => f.singles.toFixed(0))),
    }, {
      title: '2B',
      tops: _
        .take(doublesStats, 5)
        .map(m => map(m, (f) => f.doubles.toFixed(0)))
    }, {
      title: '3B',
      tops: _
        .take(triplesStats, 5)
        .map(m => map(m, (f) => f.triples)),
    }, {
      title: 'AVG',
      tops: _
        .take(avgStats, 5)
        .map(m => map(m, (f) => f.avg.toFixed(3).slice(1))),
    }, {
      title: 'OBP',
      tops: _
        .take(obpStats, 5)
        .map(m => map(m, (f) => f.obp.toFixed(3).slice(1))),
    }, {
      title: 'SLG',
      tops: _
        .take(slgStats, 5)
        .map(m => map(m, (f) => f.slg.toFixed(3).slice(1))),
    }, {
      title: 'SB',
      tops: _
        .take(stolenBasesStats, 5)
        .map(m => map(m, (f) => f.stolenBases.toFixed(0))),
    }, 
    // {
    //   title: 'HR',
    //   tops: _
    //     .take(home_runsStats, 5)
    //     .map(m => map(m, (f) => f.home_runs))
    // }
    {
      title: 'BB',
      tops: _
        .take(walksStats, 5)
        .map(m => map(m, (f) => f.walks.toFixed(0))),
    },
    {
      title: 'SO',
      tops: _
        .take(strikeOutsStats, 5)
        .map(m => map(m, (f) => f.strikeOuts.toFixed(0))),
    }
  ]
}

function map(stat, valueFunc) {
  return {number: stat.number, name: stat.name, value: valueFunc(stat)};
}