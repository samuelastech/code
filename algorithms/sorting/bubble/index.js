const util = require("../../randomNumber");
const nums = util.generateRandomNumbers(500, 10000);
const myNums = [13,11,9,1,3,2508,456,7,8,21];

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
bubbleSort(myNums, 'DESC');
console.timeEnd("Bubble")
console.log(myNums)