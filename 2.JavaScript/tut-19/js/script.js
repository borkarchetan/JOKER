// parameter and argument and create a table

function createTable(num) { // parameter

    for (var i = 1; i < 10; i++) {
        document.write(`${num} X ${i} = ${num * i} `)
        document.write("<br>")
    }
}

const table = createTable(54); // argument