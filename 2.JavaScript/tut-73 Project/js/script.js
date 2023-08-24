function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if (color = "#008000") {
        for (let elm of txt) {
            elm.style.Color = "white";
        }
    }
}