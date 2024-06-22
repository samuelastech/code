const people = [
  { name: 'Alfred', age: 47 },
  { name: 'George', age: 27 },
  { name: 'Regina', age: 31 },
  { name: 'Trisha', age: 30 }
];

/** Tag function */
const greet = (pieces, name, age) => {
  console.log(pieces[0] + name + pieces[1] + age + pieces[2]);
};

people.forEach((person) => {
  greet`Woah, ${person.name} is ${person.age}?`;
});
