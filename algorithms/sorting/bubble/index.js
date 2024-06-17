const util = require("../../../utils");
const nums = util.generateRandomNumbers(500, 10000);

function bubbleSort(array, order = 'ASC') {
  let size = array.length - 1;
  while (size) {
    for (let i = 0; i < size; i++) {
      if (order === 'DESC' ? array[i] < array[i + 1] : array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }

    size--;
  }
}

console.time("Bubble")
bubbleSort(nums, 'DESC');
console.timeEnd("Bubble")
console.log(nums)