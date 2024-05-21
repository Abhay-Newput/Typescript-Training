## Syntax

`let variableName:`type`= value;`

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
