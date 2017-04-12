String.prototype.insertAt = function (index, string) {
  return this.substr(0, index) + string + this.substr(index);
}

export function convertPlayer(csv) {
  csv = csv.replace(/"([^"]*),([^"]*)"/g, "$1$2")

  const data = csv.split(',');

  return {
    number: parseInt(data[0], 0),
    name: data[1],
    plateAppearances: parseInt(data[2], 0),
    atBats: parseInt(data[3], 0),
    hits: parseInt(data[4], 0),
    singles: parseInt(data[5], 0),
    doubles: parseInt(data[6], 0),
    triples: parseInt(data[7], 0),
    home_runs: parseInt(data[8], 0),
    runsOverErrors: parseInt(data[9], 0),
    hitByPitch: parseInt(data[10], 0),
    sac_flies: parseInt(data[11], 0),
    sac_hits: parseInt(data[12], 0),
    walks: parseInt(data[13], 0),
    walksAvg: parseFloat(data[14].insertAt(1, '.')),
    strikeOuts: parseInt(data[15], 0),
    strikeOutsAvg: parseFloat(data[16].insertAt(1, '.')),
    rbi: parseInt(data[17], 0),
    runs: parseInt(data[18], 0),
    avg: parseFloat(data[19].insertAt(1, '.')),
    obp: parseFloat(data[20].insertAt(1, '.')),
    slg: parseFloat(data[21].insertAt(1, '.')),
    stolenBases: parseInt(data[22], 0),
    stolenBasesAttempts: parseInt(data[23], 0),
    stolenBasesAvg: parseFloat(data[24].insertAt(1, '.'))
  }
}

export function convertStats(csv) {
  const csvLines = csv.split('\n');

  return csvLines.map(m => convertPlayer(m));
}