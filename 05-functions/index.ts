// a simple function
function greet(): void {
  let msg: string = "Good Evening";
  //   console.log(msg);
}
greet();

// a function with parameters
function printData(name: string, age: number): void {
  let msg: string = `Hi I'm ${name} ${age} yrs Old!`;
  //   console.log(msg);
}
printData("Binod", 21);

// a function with return Type
function reverseString(str: string): string {
  let temp: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += `${str.charAt(i)}`;
  }
  return temp;
}
let result: string = reverseString("boom");
console.log(result);

// function expression

let sum = function (a: number, b: number): void {
  let result: number = a + b + a;
  console.log(result);
};
sum(10, 20);

// arrow function

let add = (a: number, b: number): void => {
  let result: number = a + b;
  console.log(result);
};
add(10, 20);

// an object as a parameter to a function
interface Mobile {
  brand: string;
  color: string;
  price: number;
}

let printObject = function (mobile: Mobile) {
  console.log(mobile);
};

let mobileOne: Mobile = {
  brand: "Apple",
  color: "Silver",
  price: 35000,
};

printObject(mobileOne);
printObject({ brand: "Lenovo", price: 15000, color: "black" });

// Array as parameter to a function
interface Product {
  id: string;
  name: string;
  qty: number;
  price: number;
}

let printArray = function (products: Product[]): string[] {
  return products.map((product) => product.name);
};

let products: Product[] = [
  {
    id: "101a",
    name: "Smart Watch",
    qty: 2,
    price: 850,
  },
  {
    id: "202b",
    name: "Mobile",
    qty: 3,
    price: 18500,
  },
];

let productNames: string[] = printArray(products);
console.log(productNames);
