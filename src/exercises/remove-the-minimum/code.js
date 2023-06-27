/**
 * 
 * @param {array} numbers 
 * @returns 
 */
function removeSmallest(numbers) {
  let lowestNumberIndex = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] < numbers[j] && numbers[i] < numbers[lowestNumberIndex]) {
        lowestNumberIndex = i;
      }
    }
  }

  const highestRated = [...numbers];
  highestRated.splice(lowestNumberIndex, 1);
  return highestRated;
}
console.log(removeSmallest([1, 2, 3, 4, 5]))