import { SessionFactory } from "./database/SessionFactory.js";
import { Person } from "./models/Person.js";
import { Animal } from "./models/Animal.js";

try {
  const connection = await new SessionFactory({
    dbName: 'data-mapper',
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
  }).openSession();
  
  const person = new Person({ name: 'Diogo', surname: 'Rodrigues' });
  const animal = new Animal({ name: 'Caramelo' });
  
  await connection.save(person.show());
  await connection.save(animal.show());

  const people = await connection.list(Person);
  console.log(people)
} catch (error) {
  console.log(error);
}
