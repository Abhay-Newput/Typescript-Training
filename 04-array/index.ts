// string array
let fruits: string[] = ["apple", "mango", "banana", "pineapple"];
console.log(fruits);

//object array

interface Avengers {
  name: string;
  age: number;
  designation: string;
  isActive: boolean;
}

let avengers: Avengers[] = [
  {
    name: "Iron Man",
    age: 48,
    designation: "Billioare",
    isActive: true,
  },
  {
    name: "Jonathan",
    age: 500000000,
    designation: "Thor's hammer",
    isActive: false,
  },
  {
    name: "DeadPool",
    age: 34,
    designation: "Broke killer",
    isActive: true,
  },
  {
    name: "Black Widow",
    age: 24,
    designation: "Spy",
    isActive: false,
  },
];
console.log(avengers);
