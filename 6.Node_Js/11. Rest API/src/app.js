const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.send("welcome chetan! learn something"); 
})


app.listen(port, () =>{
    console.log(`connecting to ${port} successfully ...`);
})