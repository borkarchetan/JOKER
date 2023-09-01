

- The window object represents an open window in a browser. If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.
- object is unique entity which have properties and methods.
- object methods are functions written inside an object.
```js
let obj = {
    addition: function (x, y) {
        console.log(x + y)
    }
}
obj.addition(10, 15) //25



let object = {
    addition: function (x, y) {
        return x - y
    }
}
console.log(object.addition(10, 15)) //25
```
- 
    - constructor is a tempelate by which we can create objects.
    - constrctor function is a simple function that is intended to be invoked with a new keyword or any this aware function that is intended to be calledvwith the new keyword.

```js
  function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    console.log(`${this.name} is running`)
}
car1 = new generalCar("Maruti", 500)
console.log(car1)
``` 
`output`

```
Maruti is running
constructorfunctions.html:43 
generalCar {name: 'Maruti', topSpeed: 500}
name :  "Maruti"
topSpeed :  500
[[Prototype]]
```


### Object

```js
var student1 = {
    firstName: "Kunal",
    lastName: "Kumar",
    age: 25,
    class: 5

}
```
- if we want another student with same property but diff value then, we have to write same code 10 times to avoid this we use object constructor, we used to create multiple object with same property through obj const function

```js
function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
var student1 = new Student("vishwajeet", "Kumar", 30, 6); 
//Student {firstName: 'vishwajeet', lastName: 'Kumar', age: 30, class: 6}
//now by adding just one line of code we can create another student with same prop with diff value

```

- //if we want to add a new property in studwent 1

```js
student1.nationality="Indian"
console.log(student1)
```
- if we want to another property in student like nationality

```js
Student.prototype.nationality = "Indian"
```
- if you call student1 now you will se nationality property in student1 under __proto__


- **Question :**   How can we creating Objects in Js?

- **Answer :** 
    - 1. Object Literal
```js
    var a = { name : 'Batman' }
```
- But, to create multiple objects of the same type, the object literal method is insuficient but we have a solution.
-  **Constructor functions**
- We can create objects in Js using functions as well.
- This is one example of creating an object using a function.

- **Question :**   What is this keyword?
-  **Answer :** 
- In JavaScript, the this keyword refers to an object.
- Which object depends on how this is being invoked (used or called).
- The this keyword refers to different objects depending on how it is used:

```js
// In an object method, this refers to the object.
var person = {
    name: "john",
    myName: function () {
        //console.log(this.) 
        //this==person  
        //this refers to parent object
        console.log(this)
    }
}

person.myName(){
    name: 'john', myName: ƒ
    }

// Alone, this refers to the global object.
function myName() {
    console.log(this)
}
myName()
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

```
- In a function, this refers to the global object.
-  In a function, in strict mode, this is undefined.
-  In an event, this refers to the element that received the event.
-  Methods like call(), apply(), and bind() can refer this to any object.


```
`class` : A specific category can be defined as class 
(class)              =-->   Mobile
( objects)           =-->  samsung,Lg,Nokia
(Properties,Methods) =-->   Model,Ram,Color,price                    
```

__there are two ways to define class in javascript using class keyword__
- `class Declaration`
- `class Expression`

- The constructor method is a special method for creating and initializing an object within a class . There can be one special method with the name "constructor" in a class to replce prototype class was invented as `ES6 - Classes`

```js
class class_name {
    constructor() {
        // properties
    }
    // Methods
}

class Mobile {
    constructor() {
        this.model = "Glaxy";

    }
    show() { return this.model + "Price Rs 3000" }
}
var Nokia = new Mobile




class Mobile {
    constructor() {
        //Instance Member
        this.a = 12
        this.show = function () {
            return "Instance Member"
        }

    }
    //prptotype member
    show() {
        return "prtotype member"
    }
}
var Nokia = new Mobile()
console.log(Nokia.a)
console.log(Nokia)

console.log(typeof (Mobile))
```

## factory functions

- when a function returns an object we call it a factory function it can produce object instance without new keyword or class.
- `Example`

```js
function mobile() {
    return {
        model: 'Glaxy',
        price: function () {
            return ("Price :Rs. 3000");
        }
    }
}
var samsung = mobile() 
//creating new object name samsung
console.log(samsung.model + " " + samsung.price())
//Glaxy Price :Rs. 3000

// The benefit is we can create multiple object instance
```

## factory function with parameter

```js
var samsung = {
    model: "glaxy"
}
var lg = {
    model: "M55"
}
var Nokia = {
    model: "ExpressMusic"
}

// alternate method is factory fn

function mobile(model_No) {
    return {
        model: model_No,
        price: function () {
            return ("Price :Rs. 3000");
        }
    }
}
var samsung = mobile("glaxy")
var Nokia = mobile("ExpressMusic")

console.log(Nokia.model + " " + Nokia.price())
            // ExpressMusic Price :Rs. 3000
```

```javascript
function createAccount(accountName, accountType, accountBalance, isActive) {
    let account = {
        name: accountName,
        type: accountType,
        balance: accountBalance,
        active: isActive,
        print: function () {
            console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
        }
    };
    return account;
}
const acc1 = createAccount('Vivek', 'Saving', 100000, true);
acc1.print();
const acc2 = createAccount('Akash', 'Premium', 200000, true);
acc2.print();

// OutPut::     Name:  Vivek Type:  Saving Active:  true Bal:  100000
// OutPut::     Name:  Akash Type:  Premium Active:  true Bal:  200000
```

```javascript
let object1 = {
    name: "Kunal",
    sayHello: () => {
        console.log("hello")
    }
}

let object2 = {
    salary: "5000",
    work: () => {
        console.log("SDE")
    }
}


Object.setPrototypeOf(object2, object1)
object1.name
object2.name; //Kunal
object2.work() //SDE
//object2 is accessing(not taking) the name key from object1
//this is called lookup process
//Every object in javascript has a hidden property" __proto__"
//that is used to create alink between one object to another

// object2.__proto__ === object1
//true
//This chain is one way
// object1.__proto__ === object2
//false


//[1,2,3]===[1,2,3] 0r {}==={}
//false
//because they are stored at different memory locations and
//equility operator in non premitives looks for same identity,
//same location,same reference and not value

//Object.setPrototypeOf() / Object.create()  sets up a prototype chain between
// the source object and the target object. But, Object.assign() method
//  only copies enumerable and own properties from a source object to a target object.

```

- we can create chain between objects but to help us javascript gives us a protytype Object inside every function and we can use that to create chains


```javascript
function f3() { }
f3.prototype.sayName = function () {
    console.log("Hello Im KK")
}

let object5 = {
    name: "Kunal"
}
Object.setPrototypeOf(object5, f3.prototype)

object5.sayName() //Hello Im KK
```

-  static methods are used to implement functions that belong to a class as a whole and not to only a particular object.
-  This means you do not need an instance in order to use a static method. 
- A non-static method is an instance method and belongs to each object that is generated from the class.
-  a static class cannot be instantiated or inherited and that all of the members of the class are static in nature.

- [YouTube Refer](https://www.youtube.com/watch?v=terQx7LWthI)

##  difference between static and const

- **static**
    -  Static methods are used for creating a static copy of an object.
    - The static keyword is used for declaring the static method, variable, or operator.
    - Static is used with methods and classes.
    - The value of a static variable can be modified.
    - Static is a storage specifier.
    - Static can be assigned for reference types and set at run time.

- **const**
    - The const variable declares a constant value that cannot be modified.
    - The const keyword is used for declaring the constant value.
    - We can use the const keyword with arrays and objects in JavaScript.
    - A constant value cannot be modified.
    - `Const` / `Constant` is a type qualifier.
    - Constants are set at compile-time itself and assigned for value types only.

    ----
    - In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
        - `get` - to define a getter method to get the property value.
        - `set` - to define a setter method to set the property value.

```js


// data property
firstName: 'Monica',

    // accessor property(getter)
    get getName() {
    return this.firstName;
};
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error





const student = {
    firstName: 'Monica',
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah
```