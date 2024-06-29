import { ActiveRecord } from "./database/ActiveRecord.js";
import { Person } from "./models/Person.js";
import { Animal } from "./models/Animal.js";

try {
  const connection = await new ActiveRecord({
    dbName: 'active-record',
    dbVersion: 1,
    mappers: [
      {
        class: Person,
        converter: (data) => new Person({ name: data.name, surname: data.surname }),
      },
      {
        class: Animal,
        converter: (data) => new Animal({ name: data.name }),
      }
    ]
  }).init();
  
  const person = new Person({ name: 'Neto', surname: 'Souza' });
  await person.save();
  const people = await person.find();
  console.log(people);
} catch (error) {
  console.log(error);
}
