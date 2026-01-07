// Generics

interface HasAge {
  age: number;
}

function getOldest(people: HasAge[]): HasAge {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 30 }, { age: 44 }, { age: 54 }];

interface Player {
  name: string;
  age: number;
}

const players : Player[] = [
  { name: "john", age: 30 },
  { name: "jane", age: 33 },
  { name: "joe", age: 45 },
];
console.log(getOldest(people));
console.log(getOldest(players));

