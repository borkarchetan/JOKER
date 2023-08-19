alert("veryfy here..!");

const name = prompt("enter your name");

if (name != undefined) {
    document.write(`welcome ${name}`);
} else {
    let responce = confirm("are you sure you dont want to enter your name?");
    if (responce) {
        document.write(`why are you here?`);
    } else {

    }
}