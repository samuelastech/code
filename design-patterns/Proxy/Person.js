class Person {
  name;
  lastname;

  constructor({ name, lastname }) {
    this.name = name;
    this.lastname = lastname;
  }

  walk() {
    console.log('Walking...');
  }

  talk(content) {
    console.log(this.name + ':' + content);
  }
};

export { Person };
