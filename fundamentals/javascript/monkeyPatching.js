/**
 * Monkey Patch - add new functionalities, or remove them, in runtime
 */
const person = {
  walk: () => console.log('Walking...'),
  eat: () => console.log('Eating...'),
  kill: () => console.log('Killing someone...'),
}

person.kill = () => {
  throw new Error('You cannot kill someone, it is wrong');
}

person.kill();
