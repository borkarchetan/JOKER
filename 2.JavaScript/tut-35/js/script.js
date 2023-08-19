function Students(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.cls = cls;
    this.state = "maharashtra";
}

// here is the use of prototype ...
Students.prototype.nationality = "indian";


var student1 = new Students("chetan", "borkar", 22, 12);
var Student2 = new Students("chetan", "abhi", 32, 2);

console.log(student1);