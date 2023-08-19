// break, continue, and nested loop...

for (var i = 1; i < 20; i++) {
    if (i == 5) {
        console.log(`skipping number, ${i}`)
        continue;
    } if (i == 10) {
        console.log(`breaking loop with number, ${i}`)
        break;
    }

    // this is nested loop...
    for (var j = 1; j <= 3; j++) {
        
        // here we skip the number in nested loop...
        if (i == 2) {
            console.log(`skipping number in nested loop, ${i}`)
            continue;
        }
        console.log(`adding another loop with number, ${j}`)
    }
    console.log(i);
}