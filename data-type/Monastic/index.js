import { Maybe } from "./Maybe.js";

const number = Maybe.of(10)
  .map((value) => value + 10)
  .map((value) => value + 10)
  .get();

const problematicValue = Maybe.of(null)
  .map((value) => value + 10)
  .map((value) => value + 10)
  .get();

const problematicValueSolved = Maybe.of(null)
  .map((value) => value + 10)
  .map((value) => value + 10)
  .getOrElse(0);

console.log(number);
console.log(problematicValue);
console.log(problematicValueSolved);