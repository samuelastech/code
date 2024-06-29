import { Session } from "./Session.js";

class SessionFactory {
  #dbName;
  #version;
  #stores;

  constructor (config) {
    this.#dbName = config.dbName;
    this.#version = config.dbVersion;
    if (config.mappers) {
      this.#stores = new Map();
      for (const mapper of config.mappers) {
        this.#stores.set(mapper.class.name, mapper.converter)
      }
    }
  }

  async openSession () {
    try {
      const connection = await this.#createConnection();
      return new Session({ connection, stores: this.#stores });
    } catch (error) {
      console.log(error);
    }
  }

  #createConnection () {
    return new Promise((resolve, reject) => {
      const openRequest = window.indexedDB.open(this.#dbName, this.#version);
      openRequest.onsuccess = (event) => {
        resolve(event.target.result);
      };

      openRequest.onerror = (event) => {
        resolve(event.target.error);
      };

      openRequest.onupgradeneeded = (event) => {
        const connection = event.target.result;
        
        for (const [key, value] of this.#stores) {
          if (connection.objectStoreNames.contains(key)) {
            connection.deleteObjectStore(key);
          }

          connection.createObjectStore(key, { autoIncrement: true });
        }
      };
    });
  }
}

export { SessionFactory };
