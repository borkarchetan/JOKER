# javascript Interview question:

- variable are store location with assigned name it hold data that we can use or change later.

- A declearation allocates a memory and the assignment assign a value to this (itialized the variable with a value), allocated memory.


- `Nested` 
    - when there a conditional statement present inside a conditional statement.


- `Hoisting in javascript`
    - default behavior of moving all declarations to the top of the current scope.

- `Hoisting` 
    - it only applies to variables and functions
    - it dosent care about variable value.
    - all it wants to know what variables are present in a program.
    - when js engine executes a script it creates execution context.
    - each execution context has two phase.

- __JS is executed in two phases__
    - 1. **Memory Components:**(variable contents) memory creation phase
    - 2. **Code Components:**(thread of execution) code execution phase

- Hoisting simply gives higher specificity to JavaScript declarations. Thus, it makes the computer read and process declarations first before analyzing any other code in a program.

- 
    - During the creation phase of the execution context,  JS allocates memory space for the functions and variables.
    - In case of functions, the whole function body is stored but in case of the variables, it is declared and assigned a default  value `undefined`. 
    - This phenomena is called `Hoisting`

## Execution phase:

- Since memory allocation is done, now it will go into execution phase .
- In this phase, JS executes our code line by line and assigns the value to the variables.

- __Whatever we saw now is `GEC` (Global execution phase)__
    - There is one more thing called as functional execution phase.
    - Whenever a function gets invoked, a new execution context gets created known as `functional execution context`.
    - __It has two phases again__
        -  `creation phase` and `execution phase`
    - Once function execution is done, functional execution context gets removed.

- Javascript scans the file and gets the delcarations of functions, `variables` and `class` and `stores/ moves` up to the top of their scope, prior to the Code execution phase.

- global execution context is the default  context in which js code starts its execution when the file first loads in the browser.

- functional execution context is defined as the context created by the js engine whenever it finds any function call.

- Execution context (EC) is defined as the environment in which the JavaScript code is executed By environment.
- I mean what variables JavaScript code has access to at a particular time.

## Execution Stack

-  Execution stack, also known as `“calling stack”` in other programming languages.
- it is a stack with a LIFO __(Last in, First out)__ structure, which is used to store all the execution context created during the code execution.
-  When the JavaScript engine first encounters your script it creates a global execution context and push it to the current execution stack.
- Whenever the engine finds a function invocation, it creates a new execution context for that function and push it to the top of the stack.

## Variable Scope 

- Scope in JavaScript refers to the `accessibility` or `visibility` of variables.
- That is, which parts of a program have access to the variable or where the variable is visible.

## Global scope

- When you execute a script, the JavaScript engine creates a global execution context.
- It also assigns variables that you declare outside  of functions to the global execution context.
-  __These variables are in the global scope__. They are also known as `global variables`.

## Local scope

- Variables that you declare inside a function are local to that function. 
- They are called __Local Variables__ and can’t be accessed in Global Scope.

## Block scope

- Those Variables that you declare inside a block `{}` using __let__ or __const__ this all are limited only to that block.


## Data types
- **Primitive Values** 
    - `Boolean`, `BigInt`, `String`, `Symbol`, `Null` ,`Number`,  `Undefined type`
- Immutable means that which cannot be changed or modified.
- When we create a string, the value is created from scratch as opposed to being replaced.


```
 Non-zero value =   something is there 
 0              =   quantity is Non-zero
 null           =    something exixts but its value is NA or wiped out 
 undefined      =    something doesn't exixt
```

- __`Mutability` means to be able to change something `example: Rubber`__
- `Primitive Data Types` in Js is Immutable value cannot be changed in memory

```
SSBBNNU                          

they hold the value

```

- **how premitive data types are stored in memory  and it cannot be changed?**

`example 1:` 

```js
var a = "Kunal";
a[0] = "a";

console.log(a) 
```
`output:`
``` 
kunal
```
------
`example 2:` 

```js
var a = "Kunal";
a[0] = "a";

var admin = [1, 2, 3]
admin[0] = "Kunal";
console.log(admin);
``` 

`output:`
``` 
kunal, 2, 3 
```

- `Non-Primitive Data Types` in Js  is mutable, value can be changed in memory.

-  `Objects`, `Arrys`, `Functions`            they all hold the address


----- 
----- 


```js 
  const teache = {name: "Kunal"}
  teacher = {name: "Kumar"}  //Script snippet #1:2 Uncaught TypeError: Assignment to constant variable.
```

- `Note` 
    - if we are declaring a variable using `const` keyword we cannot asign a new value to it but we can mutate the values.

```js
    let obj = { name: "Kunal" }
    const teacher = obj;
    obj.name = "John" //'John'
 //here we are not assigning anything to teacher we are just mutating the values
   
 ```


 ```js
    const obj = { name: "Kunal" }
    obj.name = "John"
    console.log(obj) //john
//  we  cannot re assign value to obj we can only mutate
 ```

```js
    const arr = [1, 2, 3, 4];
    arr.push(2);
    console.log(arr);
// we can mutate but we cannnot re assign
```


## Objects And Object Sorting 

- **Write a program to merge to sorted arrays**


## Splice
- **Remove or add an element to the array based on the given range, the splice method changes the original array**

## Slice
-  **Does not change the original array**

## Pure components
- **Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.**

## Force render a component

## Use effect


## Display block and inline


## ES6 
-   ### Variable hoisting?
    ### Four es6 features
    ### Prototype chain?

    ## prototype:

    - Each object has a private property which holds a link to another object is called its `prototype`.
    - That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
    - By definition, null has no prototype, and acts as the final link in this prototype chain.

    ## Closures:

    - Given InputArr = [1, ‘a’, ‘b’, 5, 6], 
    - Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]

    ```js
     const sum = (a, b) => a + b
     sum(1, 2) // + operation
     sum(2, 3) // + operation
     sum(1, 2) // from cache
    ```
    - Implement a caching fn
    - Can change implementation of sum fn
    - Do Not polluting the global space
    - Implement a stopwatch in React JS Prototype chain
    - Array flatten,
    - var merged = [].concat.apply([], arrays);
