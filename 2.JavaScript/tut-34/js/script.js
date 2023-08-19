//  object constructor function

/* var students = {
    name: "chetan",
    age: 15,
    class: 10,
}; */

function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.cls = cls;
    this.state = "maharashtra";
}

var student1 = new Student("chetan", "borkar", 22, 12);
var Student4 = new Student("chetan", "abhi", 32, 2);
/* var Student3 = new Student("abhi", "borkar", 12, 22);
var Student5 = new Student("abhi", "shek", 18, 9); */

// we are adding here new propertie in student2

student1.city = "nagpur";

// here we can add method also

student1.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(student1);
console.log(student1.name());
