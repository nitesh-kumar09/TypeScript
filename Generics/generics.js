// Generics
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 30 }, { age: 44 }, { age: 54 }];
var players = [
    { name: "john", age: 30 },
    { name: "jane", age: 33 },
    { name: "joe", age: 45 },
];
console.log(getOldest(people));
console.log(getOldest(players));
