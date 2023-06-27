function printerError(s) {
  const scope = 'abcdefghijklm'.split('');
  return s.split('').filter(w => {
    return !scope.includes(w);
  }).length + '/' + s.length;
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));