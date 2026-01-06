// case 1
// function printID(id:ID){
//     console.log(id)
// }
// printID(1); // number ja rha phir bhi sahi hai
// printID('A123'); // string ja rha phir bhi sahi hai
// case 2
// function printID(id:ID){
//     console.log(id.toUpperCase())
//     // this is now valid because toUpperCase is only work on string type
//     // but we also have number type
// }
// printID('1')
// printID('nitesh')
// Solving Case - 2 using type Narrowing
// function printID(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     // Don't need to write else block because typescript understand if not string then number
//   }
// }
// printID('123')
// printID('nitesh')
var getFirstThree = function (x) {
    return x.slice(0, 3);
};
console.log(getFirstThree("nitesh"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
