function findEvenIndex(arr) {
  const sum = (a, b) => a + b;
  for (let i = 0; i < arr.length; i++) {
    const firstHalf = arr.slice(0, i).reduce(sum, 0);
    const secondHalf = arr.slice(i + 1).reduce(sum, 0);
    if (firstHalf === secondHalf) return i;
  }

  return -1;
}