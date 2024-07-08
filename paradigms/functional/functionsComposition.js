/**
 * Receives an array of functions, executes them from right to left, and returns a new complex one
 * @param  {...Function} fns 
 * @returns {Function}
 */
const compose = (...fns) => {
  return (value) => {
    return fns.reduceRight((previousValue, fn) => {
      return fn(previousValue);
    }, value);
  }
};

/**
 * Receives an array of functions, executes them from left to right, and returns a new complex one
 * @param  {...Function} fns 
 * @returns {Function}
 */
const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((previousValue, fn) => {
      return fn(previousValue);
    }, value);
  }
};

/**
 * Fixes the args of a function
 * @param {Function} fn
 * @param  {...any} args 
 * @returns {Function}
 */
const partialize = (fn, ...args) => {
  return fn.bind(null, ...args);
};

const random = () => Math.floor(Math.random() * 100);
const randomDecimal = () => Math.random();

const data = [
  { values: [random(), random(), random()] },
  { values: [random(), random(), random()] },
  { values: [random(), random(), random()] },
];

const getValuesFromData = (data) => data.reduce((array, object) => array.concat(object.values), []);
const proccessValues = (data) => data.map((value) => value + randomDecimal());
const filterValues = (data) => data.filter((value) => value >= 50);
const partializedGet = partialize(getValuesFromData, data);

console.log("Without function composition:");
console.log(filterValues(proccessValues(partializedGet())));

console.log("\n");

console.log("With function composition:");
const operation = compose(filterValues, proccessValues, partializedGet);
console.log(operation());