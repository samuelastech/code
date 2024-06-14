const util = require("../../randomNumber");
const nums = util.generateRandomNumbers(500, 10000);

/**
 * 
 * @param {Array<number>} array
 * @param {string} order 
 * @returns 
 */
function selectionSort(array, order = 'ASC') {
  let sorted = [];
  while (sorted.length < array.length) {
    const minorIndex = array.indexOf(Math.min(...array));
    const minor = array.splice(minorIndex, 1);
    sorted = order === 'DESC' ? minor.concat(sorted) : sorted.concat(minor);
  }
  return sorted;
}

console.time('Selection');
selectionSort(nums)
console.timeEnd('Selection');