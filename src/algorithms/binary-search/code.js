const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

/**
 * Binary search
 * @param {Number} item 
 * @param {Array} list 
 */
function search(item, list) {
  const mid = Math.floor((list.length -1) / 2);
  if (list[mid] === item) {
    return list[mid];
  } else if (list[mid] > item) {
    return search(item, list.slice(0, mid));
  } else if ((list[mid] < item)) {
    return search(item, list.slice(mid+1, list.length));
  }

  return -1;
}

console.log(search(53, primes));