// conditional statements...
// if inside if statement...
let age = 90;

if (age < 18) {
    console.log(`Your age is ${age} year baby.`);
} else if (age >= 18 && age <= 60) {
    if (age == 18) {
        console.log(`Your age is ${age} you are adult now.`);
    } else if (age == 60) {
        console.log(`Your age is ${age} you are too old.`);
    } else if (age > 21 && age < 35) {
        console.log(`Your age is ${age} go and marrige.`);
    } else {
        console.log(`Your age is ${age} you cant marrige.`);
    }
} else {
    console.log(`Your age is ${age}, who are you?`);
}