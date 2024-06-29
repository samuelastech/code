class Session {
  #stores;
  #connection;

  constructor ({ connection, stores }) {
    this.#stores = stores;
    this.#connection = connection;
  }

  async save([entity, object]) {
    const transaction = this.#connection
      .transaction([entity], 'readwrite')
      .objectStore(entity)
      .add(object);

    return new Promise((resolve, reject) => {
      transaction.onsuccess = () => resolve();
      transaction.onerror = (event) => reject(event.target.error);
    });
  }

  async list(entity) {
    const transaction = this.#connection
      .transaction([entity.name], 'readwrite')
      .objectStore(entity.name)
      .openCursor();

    const converter = this.#stores.get(entity.name);
    const list = []
    return new Promise((resolve, reject) => {
      transaction.onsuccess = (event) => {
        const current = event.target.result;
        if (current) {
          list.push(converter(current.value));
          current.continue();
        } else {
          resolve(list);
        }
      };
      transaction.onerror = () => {};
    });
  }
}

export { Session };
