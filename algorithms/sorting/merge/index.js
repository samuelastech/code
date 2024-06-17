const { myNums, generateRandomNumbers } = require("../../../utils");
const nums = generateRandomNumbers(500, 10000);

function mergeSort(array, order = 'ASC') {
  if (array.length <= 1) { // Arrays with fewer than 2 elements are already sorted
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left, order);
  const sortedRight = mergeSort(right, order);

  return merge(sortedLeft, sortedRight, order);
}

function merge(left, right, order) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  const compare = (a, b) => {
    if (order === 'ASC') {
      return a < b;
    } else {
      return a > b;
    }
  };

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compare(left[leftIndex], right[rightIndex])) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.time('Merge')
const sorted = mergeSort(myNums);
console.timeEnd('Merge');