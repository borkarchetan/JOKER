let person = {
    firstName: "chetan",
    lastName: "borkar",
    city: "nagpur",
    pinCode: "441910",
    personCalling() {
        console.log(`my name is ${person.firstName} ${this.lastName}`)
        // here is the most imp thing, we dont need to write here as person.firstName instead of this we can do like this.lastName
        
        console.log("I have " + car.brand + " which model is " + car.model);
    }
}

let car = {
    brand: "Audi",
    model: "2025"
}
person.personCalling();
