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

### - Execution phase:
- 
     - Since memory allocation is done, now it will go into execution phase .
     - In this phase, JS executes our code line by line and assigns the value to the variables.