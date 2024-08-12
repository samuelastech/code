class Deque {
  #items = [];

  addFront(element) {
    if (this.#isArray(element)) {
      this.#items = [...element, ...this.#items];
    } else {
      this.#items.unshift(element);
    }
  }

  addBack(element) {
    if (this.#isArray(element)) {
      this.#items = [...this.#items, ...element];
    } else {
      this.#items.push(element);
    }
  }

  removeFront() {
    return this.#items.shift();
  }

  removeBack() {
    return this.#items.pop();
  }

  get front() {
    return this.#items[0];
  }

  get back() {
    return this.#items[this.#items.length-1];
  }

  get size() {
    return this.#items.length;
  }

  get isEmpty() {
    return this.#items.length === 0;
  }

  get items() {
    return [].concat(this.#items);
  }

  #isArray(element) {
    return element.length >= 0;
  }
}

export { Deque };
