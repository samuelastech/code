function openOrSenior(data) {
  return data.map(item => {
    const age = item[0];
    const handicap = item[1];
    return (age > 54 && handicap > 7) ? 'Senior' : 'Open';
  });
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));