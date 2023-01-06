var isSquare = function (n) {
  if (n < 0) return false
  return (String(Math.sqrt(n)).indexOf('.') == -1) ? true : false;
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}