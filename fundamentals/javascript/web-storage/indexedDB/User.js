class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get () {
    return { name: this.#name };
  }
}