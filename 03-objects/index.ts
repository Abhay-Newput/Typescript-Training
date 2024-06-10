interface Vehicle {
  company: string;
  model: string;
  sitting: number;
  isElectric: boolean;
}
let fortuner: Vehicle = {
  company: "Toyota",
  model: "2024",
  sitting: 7,
  isElectric: false,
};

console.log(fortuner.company);

// Nested Object

interface Address {
  street: string;
  city: string;
  pincode: number;
  isHome: boolean;
}

interface User {
  name: string;
  age: number;
  male: boolean;
  address: Address;
}

const user: User = {
  name: "Tiku badmash",
  age: 6,
  male: true,
  address: {
    street: "Shaitaan gali, Jadooi mohalla",
    city: "Choron ka Sheher",
    pincode: 200001,
    isHome: true,
  },
};

console.log(user);
