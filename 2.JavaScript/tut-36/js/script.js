// nested object

var user = {
    id: 101,
    email: 'abc@gmail.com',
    personalInfo: {
        firstNmae: 'chetan',
        lastName: 'borkar',
        age: 26,
        address: {
            city: "nagpur",
            state: "Maha",
            pinCode: "441910"
        }
    }
};

console.log("this is user : ", user);
console.log("this is personalInfo : ", user.personalInfo);
console.log("this is address : ", user.personalInfo.address);
console.log("this is city : ", user.personalInfo.address.city);