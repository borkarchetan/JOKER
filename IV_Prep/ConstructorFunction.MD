

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