import { generateRandomNumbers } from '../../utils.js';

/** Array */
let array = generateRandomNumbers();
console.log("Original:", array, "\n");

/**
 * Permuting
 */
function permute(array) {
  const result = [];

  if (array.length === 0) return [[]];

  for (let i = 0; i < array.length; i++) {
    const current = array.slice();
    const next = current.splice(i, 1);
    const permutations = permute(current);

    for (const permutation of permutations) {
      result.push(next.concat(permutation));
    }
  }

  return result;
}

array = generateRandomNumbers(10, 3);
console.log("Permutation:", permute(array), "\n");

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
array = new Array();
console.log("Array constructor:", array, "\n");

array = new Array(10);
console.log("Array constructor - empty positions:", array, "\n");

/**
 * Filling arrays
 */
array.fill('Mortadela não tem "N"');
console.log("Array filling:", array, "\n");

/** Reducing */
array = generateRandomNumbers();
console.log("Reducing:");
const reduced = array.reduce((a, b, i, array) => {
  console.log({ i, acumulator: a, current: b });
  return a + b;
}, 0);

console.log("Reduced final:", reduced, "\n");

const reducedToRight = array.reduce((a, b) => a - b);
const reducedFromRight = array.reduceRight((a, b) => a - b);
console.log({reducedToRight, reducedFromRight})