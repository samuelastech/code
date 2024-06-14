function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomNumbers(max, size) {
  const nums = [];
  
  for (let i = 0; i < size; i++) {
    nums.push(getRandomInt(max));
  }

  return nums;
}

exports.generateRandomNumbers = generateRandomNumbers;
exports.myNums = [13,11,9,1,3,2508,456,7,8,21];