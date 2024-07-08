/**
 * Fixes the args of a function
 * @param {Function} fn
 * @param  {...any} args 
 * @returns {Function}
 */
const partialize = (fn, ...args) => {
  return fn.bind(null, ...args);
};

const isDivisible = (divider, number) => {
  return (number % divider) === 0;
}

console.log("No partial application:");
console.log(isDivisible(2, 10));
console.log(isDivisible(2, 5));
console.log(isDivisible(2, 12));

console.log("\n");

console.log("With partial application:");
const isDvisibleByTwo = partialize(isDivisible, 2);
console.log(isDvisibleByTwo(10));
console.log(isDvisibleByTwo(5));
console.log(isDvisibleByTwo(12));
