class Person {
  #name;
  #surname;

  constructor ({ name, surname }) {
    this.#name = name;
    this.#surname = surname;
  }

  get fullName() {
    return `${this.#name} ${this.#surname}`;
  }

  show () {
    return [Person.name, {
      name: this.#name,
      surname: this.#surname,
    }];
  }
}

export { Person };
