const number = Math.random() * 10;
const milliseconds = () => Math.random() * 1000;

const promise = new Promise((resolve, reject) => {
  if(number >= 5) resolve(number);
  else reject(number);
});

promise
  .then((number) => console.log("Resolving:", number, "\n"))
  .catch((number) => console.log("Resolving", number, "\n"));

const promise1 = new Promise((resolve) => {
  const delay = milliseconds();
  setTimeout(() => resolve('Promise1 cabou primeiro!'), delay);
});

const promise2 = new Promise((resolve) => {
  const delay = milliseconds();
  setTimeout(() => resolve('Promise2 cabou primeiro!'), delay);
});

Promise.race([promise1, promise2])
  .then((winner) => console.log('Promise Race:', winner, "\n"));

Promise.all([promise1, promise2])
  .then(([result1, result2]) => console.log('Promise All -- Correndo em paralelo:', result1, result2));