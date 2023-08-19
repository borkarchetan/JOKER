// property getter and setter...

var person = {
    fName: "chetan",
    lName: "borkar",
    city: "nagpur",
    state: "maha",
    county: "india",

    //  getName: function() {
    //     return this.fName.toUpperCase();
    // }


    // get getName() {
    //     return this.fName.toUpperCase();
    // }

    set setName(n) {
        this.fName = n.toUpperCase();
    }
};

person.setName= "abhishek"
console.log(person);