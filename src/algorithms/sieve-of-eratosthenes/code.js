
/**
 * Given a number, creates an array
 * @param {Number} number
 * @returns {Array} an array of arrays, containg the number and the 'color'
 * respectively -- '0' means prime, '1' means composite
 */
const generateArray = number => {
  const numbers = [];

  for (let i = 2; i <= Math.floor(number); i++) {
    numbers[i-2] = [i, 0];
  }

  return numbers;
};

/**
 * Receives an array and mark the composite numbers
 * @param {Array} numbers pair of numbers and 'colors' [[2, 0], [3, 0]]
 * @returns {Array}
 */
const markComposites = numbers => {
  for (let j = 0; numbers[j][0] * numbers[j][0] < numbers.length; j++) {
    // All prime numbers were found
    // if (numbers[j][0] * numbers[j][0] > numbers.length) break;
    if (numbers[j][1] === 1) continue;
  
    // Composite numbers
    for (let k = 0; k < numbers.length; k++) {
      const composite = numbers[j][0] * numbers[k][0];
      if (composite > numbers.length+1) break; // Goes to the next prime
      const index = composite - 2;
      numbers[index][1] = 1; // Marking the composite
    }
  }

  return numbers;
};

const printPrimes = numbers => {
  for (const pair of numbers) {
    const [number, color] = pair;
    if (color === 0) console.log(number);
  }
};

let numbers = generateArray(20);
numbers = markComposites(numbers);
printPrimes(numbers);