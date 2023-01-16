const entriesToObject = (array) => {
  return Object.fromEntries(array.map(numbers => [numbers, 0]));
}

const findOdd = (array) => {
  let obj = entriesToObject(array);

  for (const number of array) {
    obj[number] = obj[number] += 1;
  }

  for (const value in obj) {
    if (obj[value] % 2 != 0)
      return +value;
  }

  return obj;
}


console.log(findOdd([1, 1, 2]))