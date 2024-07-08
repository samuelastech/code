import { EventEmitter } from "./EventEmitter.js";

EventEmitter.on('something', (data) => {
  console.log('Something happened:', data);
});

EventEmitter.on('brazilWonWorldCup', () => {
  console.log('É HEXAAAA!!');
});
