const person = {
  name: 'John Doe',
  sayHello() {
    return `Hello ${this.name}`;
  },
  num: 1,
};

const animal = {
  name: 'Bernardo'
}

class Car {
  constructor(name) {
    this.name = name;
  }
}

console.log("Getting the property:", person.name);
console.log("Getting the property with Reflect:", Reflect.get(person, 'name'));
console.log("\n");

console.log("Setting the property:", person.name = 'Cazares Doe');
console.log("Setting the property with Reflect:", Reflect.set(person, 'name', 'Otero Doe'));
console.log("\n");

console.log("Calling a function:", person.sayHello());
console.log("Calling a function with Reflect:", Reflect.apply(person.sayHello, person, []));
console.log("Calling a function with Reflect and changing the context:", Reflect.apply(person.sayHello, animal, []));
console.log("\n");

console.log("Constructing an object:", new Car('Siena'));
console.log("Constructing an object with Reflect:", Reflect.construct(Car, ['Siena']));
console.log("\n");

try {
  const returnsTheObject = Object.defineProperty(person, 'age', {
    value: 12,
    writable: true,
  });
  console.log("Defining a property in an object:", returnsTheObject);
} catch (error) {
  console.log("'Object.defineProperty' throws an exception if it was wrong");
}

const returnsABoolean = Reflect.defineProperty(person, 'age', {
  value: 18,
  writable: true,
  enumerable: true,
});
console.log("Defining a property in an object with Reflect:", returnsABoolean);
console.log("\n");

console.log("Deleting a property in an object:", delete person.sayHello);
console.log("Deleting a property in an object with Reflect:", Reflect.deleteProperty(person, 'num'));
console.log("\n");
