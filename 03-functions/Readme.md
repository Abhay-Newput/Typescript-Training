# Function arguments & return types

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
