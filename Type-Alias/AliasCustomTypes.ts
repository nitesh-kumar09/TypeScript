// Defining types or alias

// Defining types or custom types

type ID = number;

type fruits = string;


// Make sure defining  type { not } in format of string that is in double quote '' or ""
type User = {
    name:string;
    age:number;
    address?:string;  // here ? is used for optional 
}

const user:User = {
    name:'Nitesh Singh',
    age:24,
}

// function with type User and it's return type is also User
function login(userData: User):User{
    return userData;
}


console.log(login({name:"Satish Singh",age:20}))

