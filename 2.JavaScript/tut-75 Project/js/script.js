/* Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters

pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
*/

let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;


function validateForm() {
    if (username.value == "") {
        console.log("Please enter a username!");
        document.getElementById("userError").innerHTML = "Please enter a username!";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML =
            "Please enter min 3 charecter!";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }


    if (password.value == "") {
        document.getElementById("passError").innerHTML =
            "password should not be empty!";
        flag = 0;
    } else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if (flag) {
        return true;
    } else {
        return false;
    }
}
