class ConnectionFactory {
  static #database = 'database';
  static #stores = ['users'];
  static #version = 6;
  static #connection = null;
  static #close = null;

  constructor () {
    throw new Error('It is not possible to create instances of this class');
  }

  static #createStores (connection) {
    this.#stores.forEach(store => {
      connection.objectStoreNames.contains(store)
        ? connection.deleteObjectStore(store)
        : null;
      connection.createObjectStore(store, { autoIncrement: true });
    });
  }
 
  static getConnection () {
    return new Promise((resolve, reject) => {
      const openRequest = window.indexedDB.open(this.#database, this.#version);

      openRequest.onupgradeneeded = (event) => {
        this.#createStores(event.target.result);    
      }
 
      openRequest.onsuccess = (event) => {
        if (!this.#connection) {
          this.#connection = event.target.result;
          this.#close = this.#connection.close.bind(this.#connection);
          this.#connection.close = function () {
            throw new Error('You cannot close a connection manually');
          }
        }
        resolve(this.#connection);
      };

      openRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  static closeConnection () {
    if (this.#connection) {
      this.#close();
      this.#connection = null;
    }
  }
}

