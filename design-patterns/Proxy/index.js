import { Person } from "./Person.js";

const person = new Proxy(new Person({ name: 'Jude', lastname: 'Hey' }), {
  get(target, prop) {
    if (typeof target[prop] === typeof Function) {
      Reflect.apply(target[prop], target, []);
    }
    return () => { };
  },

  set(target, prop, value) {
    return () => {  };
  }
});

/** Get is intercepted */
person.walk()

/** Set is intercepted */
person.lastname = 'Doe';

/** Set is not intercepted */
Object.defineProperty(person, 'lastname', {
  value: 'William'
});

Reflect.defineProperty(person, 'lastname', {
  value: 'Mariela'
});
