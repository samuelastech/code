
class ActiveRecord {
  #dbName;
  #version;
  #stores;
  #mappers;
  #connection;

  constructor (config) {
    this.#dbName = config.dbName;
    this.#version = config.dbVersion;
    if (config.mappers) {
      this.#mappers = config.mappers;
      this.#stores = new Map();
      for (const mapper of this.#mappers) {
        this.#stores.set(mapper.class.name, mapper.converter);
        mapper.class.prototype.save = this.#save;
        mapper.class.prototype.find = this.#find;
        mapper.class.prototype.converter = mapper.converter;
      }
    }
  }

  async init () {
    try {
      this.#connection = await this.#createConnection();
      for (const mapper of this.#mappers) {
        mapper.class.prototype.connection = this.#connection;
      }
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

  async #save () {
    const transaction = this.connection
      .transaction([this.constructor.name], 'readwrite')
      .objectStore(this.constructor.name)
      .add(this.show()[1]);
    
    return new Promise((resolve, reject) => {
      transaction.onsuccess = () => resolve();
      transaction.onerror = (event) => reject(event.target.error);
    });
  }

  async #find () {
    const transaction = this.connection
      .transaction([this.constructor.name], 'readwrite')
      .objectStore(this.constructor.name)
      .openCursor();

    const list = [];
    return new Promise((resolve, reject) => {
      transaction.onsuccess = (event) => {
        const current = event.target.result;
        if (current) {
          list.push(this.converter(current.value));
          current.continue();
        } else {
          resolve(list);
        }
      };

      transaction.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
}

export { ActiveRecord };
