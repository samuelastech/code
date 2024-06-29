class Animal {
  #name;

  constructor ({ name }) {
    this.#name = name;
  }

  show () {
    return [Animal.name, {
      name: this.#name,
    }];
  }
}

export { Animal };
