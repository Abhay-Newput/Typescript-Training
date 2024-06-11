# Generic Functions

A generic function uses a type variable, typically denoted as T, to represent the type of its arguments or return value.

```
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello"); // Explicit type
let output2 = identity("Hello"); // Type inference

```

# Generic Interfaces

You can define generic interfaces to create reusable interfaces that work with various types.

```
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

```

# Generic Classes

Generic classes can be created to handle different types.

```
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

```
