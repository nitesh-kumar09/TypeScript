// Merge in typescript

// If interface two or more interface have same name then automatic
// typescript merge all the interface

interface Book {
  price: number;
  name: string;
}

interface Book {
  size: number;
}

interface Book{
    duration:number; //in hrs
}

const book: Book = {
  price: 199,
  name: "Atomic Habbit",
  size: 200,
  duration:4
};

