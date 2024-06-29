import { useMemo } from "./memoizer.js";

function sum(a, b) {
  return a + b;
}

const factorial = useMemo(n => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(--n);
});

const sumM = useMemo(sum);

console.log(sumM(5, 5));
console.log(sumM(10, 7));
console.log(sumM(5, 5));

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
