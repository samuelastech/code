class User {
  #name;

  constructor ({ name }) {
    this.#name = name;
  }

  show () {
    return {
      name: this.#name,
    };
  }
}

export { User };
