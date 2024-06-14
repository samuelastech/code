const util = require("../../utils");
const nums = util.generateRandomNumbers(500, 10000);

/**
 * 
 * @param {Array<number|string>} array
 * @param {string} order 
 * @returns {Array<number|string>}
 */
function selectionSort(array, order = 'ASC') {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < array.length; j++) {
      if (order === 'ASC' ? array[j] < array[minIndex] : array[j] > array[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  
  return array;
}

console.time('Selection');
selectionSort(nums);
console.timeEnd('Selection');