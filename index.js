const express = require("express");
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())


app.get("/",(req,res) => {
    res.send("hello world this is testy food server")
})


app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})