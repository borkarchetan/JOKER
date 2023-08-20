let box = document.getElementById('box');
// console.log(box.className);

box.className += " newClass";

// console.log(box.className)
// console.log(box.classList)

// here we can add another class
box.classList.add("three");

for (let css of box.classList) {
    console.log(css);
}
