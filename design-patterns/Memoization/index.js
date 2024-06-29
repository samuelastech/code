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


const url = 'https://jsonplaceholder.typicode.com/posts/';

const fetchHandler = (res) => {
  return res.ok ? res.json() : Promise.reject(res.statusText);
}

const getPost = (id) => {
  return fetch(url + id).then(fetchHandler);
}

const getPostM = useMemo(getPost);

getPostM(1)
  .then(console.log)
  .then(() => getPostM(1))
  .catch(console.log)
