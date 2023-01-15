const decimalToBinary = (number) => {
  return number.toString(2);
};

const maxOneSequence = (binary) => {
  let max = 0;
  let consecutives = 0;

  for (const digit of binary) {
    if (+digit) {
      consecutives++;
    } else {
      max = consecutives > max ? consecutives : max;
      consecutives = 0;
    }
  }

  max = consecutives > max ? consecutives : max;

  return max;
};

console.log(maxOneSequence(decimalToBinary(439)))