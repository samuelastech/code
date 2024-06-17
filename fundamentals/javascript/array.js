const { generateRandomNumbers } = require('../../utils');

/** Array */
const array = generateRandomNumbers();
console.log("Original:", array, "\n");

/**
 * Sorting
 * if it's negative, A will be sorted before B  
 * if it's positive, B will be sorted before A
 * if it's zero, no changes is done
 */
const sortedArrayASC = array.toSorted((a, b) => a - b);
const sortedArrayDESC = array.toSorted((a, b) => b - a);
console.log("Sorted ASC:", sortedArrayASC, "\n");
console.log("Sorted DESC:", sortedArrayDESC, "\n");
