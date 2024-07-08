class EventEmitter {
  /** @type {Map<string, Array<Function>>} */
  static #events = new Map();

  /**
   * Subscribes in an event
   * @param {string} event
   * @param {Function} listener - What to do when the event is triggered 
   */
  static on(event, listener) {
    if(!this.#events.has(event)) this.#events.set(event, []);
    this.#events.get(event).push(listener)
  }

  static emit(event, data) {
    const listeners = this.#events.get(event);
    if(listeners) listeners.forEach((listener) => {
      listener(data);
    });
  }
}

export { EventEmitter };
