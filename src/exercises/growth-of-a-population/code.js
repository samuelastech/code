function nbYear(p0, percent, aug, p) {
  let count = 0;
  while (p0 < p) {
    count++;
    p0 += Math.floor((p0 * (percent / 100)) + aug);
  }
  return count;
}

/**
 * Best practice
 */
function nbYear1(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years;
}

console.log(nbYear1(1500, 5, 100, 5000));