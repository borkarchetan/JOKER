// argument objects

/* function add() {
    // document.write(arguments);
    console.log(arguments);
    document.write("<br>");

}

add(4, 6);
add(4, 6, 4);
add(4, 6, 4, 7);
add(4, 6, 4, 7, 6); */

// here we are adiing without passing defined parameter...

function add() {
    if (arguments.length == 0) {
        document.write("add something in the arguments");
        // console.log("add something in the arguments");
    } else {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        document.write(`Total of arguments is: ${total}`);
        // console.log(`Total of arguments is: ${total}`);
    }
}

add(4, 7, 47);
// add()
