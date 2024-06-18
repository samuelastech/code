class HashTable {
  #table = new Array(10007);
  #size = 0;

  constructor() {
    Array.prototype.hash = function (key) {
      let hash = 17;
    
      for (const char of key) {
        hash = (13 * hash * char.charCodeAt(0)) % this.length;
      }

      return hash;
    }
  }

  /**
   * Resizes the table size depending on the `loadFactor` percentage
   */
  #resize = () => {
    const newTable = Array(this.#table.length * 2);
    for (const item of this.#table) {
      if (item) {
        for (const [key, value] of item) {
          this.#avoidCollision({ table: newTable, key, value });
        }
      }
    }
    this.#table = newTable;
  }

  /**
    * @typedef {Object} Params
    * @property {Array} table - The hash table where the key-value pair will be stored.
    * @property {string} key
    * @property {*} value.
    */

  /**
   * An abstract function that creates the hash and store the value
   * @param {Params} params
   */
  #avoidCollision = ({ table, key, value }) => {
    const hash = table.hash(key);
    
    // Avoiding collision
    if (table[hash]) {
      table[hash].push([key, value]);
    } else {
      table[hash] = [[key, value]];
    }
  }

  /**
   * Stores a value
   * @param {string} key 
   * @param {*} value 
   */
  setItem = (key, value) => {
    this.#avoidCollision({ table: this.#table, key, value });
    this.#size++;
    const loadFactor = this.#size / this.#table.length;
    if (loadFactor > 0.8) this.#resize();
  }

  /**
   * Gets an item
   * @param {string} key 
   * @returns {*}
   */
  getItem = (key) => {
    const hash = this.#table.hash(key);

    if (!this.#table[hash]) {
      return null;
    }
    
    return this.#table[hash].find(item => item[0] === key)[1];
  }

  /**
   * Gets the total of items stored
   */
  get size() {
    return this.#size;
  }

  /**
   * Gets the proto size of the table
   */
  get protoSize() {
    return this.#table.length;
  }
}

exports.HashTable = HashTable;
