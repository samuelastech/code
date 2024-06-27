class UserDAO {
  #connection = null;
  #store = 'users';

  constructor (connection) {
    this.#connection = connection;
  }

  add (user) {
    return new Promise((resolve, reject) => {
      const request = this
        .#getStore()
        .add(user);
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }

  list () {
    const cursor = this
        .#getStore()
        .openCursor();
        
    const data = [];

    cursor.onsuccess = (event) => {
      const current = event.target.result;
      if (current) {
        data.push(current.value);
        current.continue();
      } 
    }

    cursor.onerror = (event) => console.log(event.target.error);

    return data;
  }

  #getStore (operationType = 'readwrite') {
      const transaction = this.#connection.transaction([this.#store], operationType);
      return transaction.objectStore(this.#store);
    }
}