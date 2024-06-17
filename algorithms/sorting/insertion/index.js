const { myNums, generateRandomNumbers } = require("../../../utils");
const nums = generateRandomNumbers(500, 10000);

function insertionSort(array, order = 'ASC') {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (order === 'DESC' ? array[j] > array[j - 1] : array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
}

console.time('Insertion')
insertionSort(nums);
console.timeEnd('Insertion')
