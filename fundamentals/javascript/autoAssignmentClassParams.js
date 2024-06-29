class Person {
  #person = {};
  
  constructor (params) {
    Object.assign(this.#person, params);
  }

  show() {
    return this.#person;
  }
}
let t = new Person({ name: 'Samuel', surname: 'Souza', age: 18 });
console.log(t.show());

