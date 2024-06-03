## Syntax

`let variableName: type= value;`

# Type Annotation

TypeScript uses type annotations to explicitly specify types for identifiers such as variables, functions, objects, etc.

TypeScript uses the syntax `: type` after an identifier as the type annotation, which `type` can be any valid type.

Once an identifier is annotated with a type, it can be used as that type only. If the identifier is used as a different type, the TypeScript compiler will issue an error.

```
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

## Type annotation examples

### Arrays

`let arrayName: type[];`

`let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];`

### Object

```
let person: {
   name: string;
   age: number
};

person = {
   name: 'John',
   age: 25
}; // valid

```

- Assign values in Object

```
   let obj: { [abc: string]: any } = {};
   obj.property1 = "value1";
   obj.property2 = 42;

   console.log(obj); // { property1: 'value1', property2: 42 }

```

### Enum

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

- First, use the `enum` keyword followed by the name of the enum.
- Then, define constant values for the enum.

`enum name {constant1, constant2, ...};`

You should use an enum when you:

- Have a small set of fixed values that are closely related
- And these values are known at compile time.

### Any Type

- Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third-party API or user input.

- In this case, you want to opt out of the type checking and allow the value to pass through the compile-time check.

- To do so, you use the any type. The any type allows you to assign a value of any type to a variable:

### Void

The `void` type denotes the absence of having any type at all. It is a little like the opposite of the `any` type.

```

   function log(message): void {
      console.log(messsage);
   }

```

**`void` type as the return type of functions that do not return any value.**

### Never

- The `never` type is a type that contains no values. Because of this, you cannot assign any value to a variable with a `never` type.
- Typically, you use the `never` type to represent the return type of a function that always throws an error.

### Union

- Sometimes, you will run into a function that expects a parameter that is either a number or a string.

```
   function add(a: any, b: any) {
      if (typeof a === 'number' && typeof b === 'number') {
         return a + b;
      }
      if (typeof a === 'string' && typeof b === 'string') {
         return a.concat(b);
      }
      throw new Error('Parameters must be numbers or strings');
   }

```

A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

A TypeScript union type allows you to store a value of one or several types in a variable.

### Aliases
