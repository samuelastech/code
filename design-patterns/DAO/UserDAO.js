class UserDAO {
  #users = [];
  #connection = null;

  constructor (connection) {
    this.#connection = connection;
  }

  create(user) {
    return new Promise((resolve) => {
      this.#users.push(user);
      resolve();
    });
  }

  list() {
    return this.#users;
  }
}

exports.UserDAO = UserDAO;
