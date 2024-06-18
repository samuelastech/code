const { generateMatrix, matrixToString } = require('../../utils');

/** Array */
const matrix = generateMatrix(4, 4);
console.log("Original:", matrix, "\n");

/** Reversing a row */
matrix[1].reverse();
console.log("Reversed row:", matrix, "\n");

/** Reversing a column */
function reverseColumn(matrix, columnIndex) {
  let j = matrix.length - 1;
  for (let i = 0; i <= j; i++) {
    const spliced = matrix[i][columnIndex];
    const opposite = matrix[j][columnIndex];

    matrix[i].splice(columnIndex, 1, opposite);
    matrix[j].splice(columnIndex, 1, spliced);
    j--;
  }

  return matrix;
}
console.log("Reversed column:", reverseColumn(matrix, 0), "\n");

/**
 * Gets a sub array
 * @param {Array<Array<number>>} matrix 
 * @param {1 | 2 | 3 | 4} quadrant 
 * @returns {Array<Array<number>>}
 */
function getQuadrant(matrix, quadrant = 1) {
  const subArray = [];

  const upperLeft = () => {
    for (let i = 0; i < matrix.length / 2; i++) {
      const row = [];

      for (let j = 0; j < matrix.length / 2; j++) {
        row.push(matrix[i][j]);
      }

      subArray.push(row);
    }
  };

  const upperRight = () => {
    for (let i = 0; i < matrix.length / 2; i++) {
      const row = [];

      for (let j = Math.round(matrix.length / 2); j < matrix.length; j++) {
        row.push(matrix[i][j]);
      }

      subArray.push(row);
    }
  };

  const lowerLeft = () => {
    for (let i = Math.round(matrix.length / 2); i < matrix.length; i++) {
      const row = [];

      for (let j = 0; j < matrix.length / 2; j++) {
        row.push(matrix[i][j]);
      }

      subArray.push(row);
    }
  };

  const lowerRight = () => {
    for (let i = Math.round(matrix.length / 2); i < matrix.length; i++) {
      const row = [];

      for (let j = Math.round(matrix.length / 2); j < matrix.length; j++) {
        row.push(matrix[i][j]);
      }

      subArray.push(row);
    }
  };

  switch (quadrant) {
    case 1: upperLeft();
      break;

    case 2: upperRight();
      break;

    case 3: lowerLeft();
      break;

    case 4: lowerRight();
      break;
  }

  return subArray;
}

console.log("Upper left quadrant: ", getQuadrant(matrix, 1), "\n");
console.log("Upper right quadrant: ", getQuadrant(matrix, 2), "\n");
console.log("Lower left quadrant: ", getQuadrant(matrix, 3), "\n");
console.log("Lower right quadrant: ", getQuadrant(matrix, 4), "\n");
