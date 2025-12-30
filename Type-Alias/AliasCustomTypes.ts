// Defining types or alias

// Defining types or custom types

// defining types
type ID = number;

// use above types as: -
const userId : ID = 123;

// Defining types
type fruits = string;

// use above types as: -
const apple : fruits = 'Apple'


// Make sure defining  type { not } in format of string that is in double quote ""  or single quote '' 
type User = {
    name:string;
    age:number;
    address?:string;  // here ? is used for optional 
}

// used above types
const user:User = {
    name:'Nitesh Singh',
    age:24,
}

// use above types in function

// function with type User and it's return type is also User
function login(userData: User):User{
    return userData;
}


console.log(login({name:"Satish Singh",age:20}))

