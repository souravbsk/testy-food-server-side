const express = require("express");
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./datas/chefs.json');

app.use(cors())


app.get("/",(req,res) => {
    res.send("hello world this is testy food server")
})

app.get("/chefs",(req,res) => {
    res.send(chefs)
})



app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})