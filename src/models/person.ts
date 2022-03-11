export interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

export function showFullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

export function makePerson(name: string, surname: string): Person {
  const result = {
    firstName: name,
    lastName: surname,
  };
  return result;
}
