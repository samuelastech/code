const { User } = require('./User');
const { UserDAO } = require('./UserDAO');

/** For each entity, you create a DAO */
const connection = {};
const userDAO = new UserDAO(connection);
const person = new User({ name: 'Edilson', lastname: 'Cavaquinho' });
userDAO.create(person.get())
  .then(() => console.log('User created'));

console.log(userDAO.list());
