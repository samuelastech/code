class User {
  #name;
  #lastname;

  constructor ({ name, lastname }) {
    this.#name = name;
    this.#lastname = lastname;
  }

  get() {
    return {
      name: this.#name,
      lastname: this.#lastname,
    }
  }
}

exports.User = User;
