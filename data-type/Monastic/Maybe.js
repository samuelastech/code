class Maybe {
  #value;

  constructor(value) {
    this.#value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  get isNothing() {
    return this.#value === null || this.#value === undefined;
  }

  map(fn) {
    if(this.isNothing) return Maybe.of(null);
    return Maybe.of(fn(this.#value));
  }

  get() {
    return this.#value;
  }

  getOrElse(value) {
    return this.isNothing ? value : this.#value;
  }
}

export {
  Maybe
};
