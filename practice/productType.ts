// Type = type ka use data ka shape batane ke liye hota hai.

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

// Use

const product: Product = {
  id: 100,
  title: "Bottle",
  price: 499,
  inStock: true,
};

// Type alias = Type ko nickname dena.

type OrderId = string;
type Price = number;

// Use

const orderId: OrderId = "ord123";
const price: Price = 199;


type Address = {
    addressLine:string;
    city:string;
    state:string;
    pinCode:number;
}

// use

const address : Address ={
    addressLine:'Mahua Bihar',
    city:'Mahua',
    state:'Bihar',
    pinCode:844139
}

