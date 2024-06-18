const { generateRandomNumbers } = require('../../utils');

/** Array */
const array = generateRandomNumbers();
console.log("Original:", array, "\n");

/**
 * Reversing
 */
console.log("Reversed:", array.reverse(), "\n");
let j = array.length-1;
for (let i = 0; i <= j; i++) {
  [array[i], array[j]] = [array[j], array[i]];
  j--;
}
console.log("Reversed again:", array, "\n");

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

/**
 * Array constructor
 */
const array1 = new Array();
console.log("Array constructor:", array1, "\n");

const array2 = new Array(10);
console.log("Array constructor - empty positions:", array2, "\n");

/**
 * Filling arrays
 */
array2.fill('Mortadela não tem "N"');
console.log("Array filling:", array2, "\n");
