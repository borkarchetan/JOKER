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