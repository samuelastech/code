import { Deque } from "./Deque.js";

const deque = new Deque();

deque.addFront(1);
deque.addFront([5, 4]);

deque.addBack(["messia", 25, 'camoar']);
deque.addBack(99);

deque.removeBack()
deque.removeFront()

console.log(deque.items);