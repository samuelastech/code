/**
 * Generates a random int in between the max param
 * @param {number} max size of the integer
 * @returns {number}
 */
export function getRandomInt(max = 100) {
  return Math.floor(Math.random() * max);
}

/**
 * Generates an array with random int
 * @param {number} max size of each integer
 * @param {number} size is the length of the array
 * @returns {Array<number>}
 */
export function generateRandomNumbers(max = 100, size = 10) {
  const nums = [];
  
  for (let i = 0; i < size; i++) {
    nums.push(getRandomInt(max));
  }

  return nums;
}

/**
 * Generates a random matrix
 * @param {number} m rows
 * @param {number} n columns
 * @param {number} max value of each integer
 */
export function generateMatrix(m = 10, n = 10, max = 100) {
  const matrix = [];

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(getRandomInt(max));
    }
    
    matrix.push(row);
  }

  return matrix;
}