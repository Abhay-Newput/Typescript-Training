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

### Function arguments & return types

- simple function in TypeScript without type annotations:

```
   function greet(name) {
    return `Hello, ${name}`;
   }

```

- Add type annotations to the parameters and the return type:

```
   function greet(name: string): string {
      return `Hello, ${name}`;
   }

```

- - `name: string` specifies that the name parameter must be a string.
- - `: string` after the parameter list specifies that the function returns a string.

- Function Expressions

```
   let greet: (name: string) => string;

   greet = function(name: string): string {
      return `Hello, ${name}`;
   };

```

- - `let greet: (name: string) => string;` declares a variable `greet` that holds a function taking a string parameter and returning a string.
- - The function expression `function(name: string): string` assigns a function to `greet` with the same type signature.

- Logging and Returning in a Function
  If you want to both log a value to the console and return it, you can do it like this:

```
   let greeting: (name: string) => string;

   greeting = function(name: string): string {
      const message = `Hi ${name}`;
      console.log(message); // Log the message
      return message; // Return the message
   };

```

- Inline Arrow Function

```
   let greeting: (name: string) => string;

   greeting = (name: string): string => {
      const message = `Hi ${name}`;
      console.log(message); // Log the message
      return message; // Return the message
   };

```
