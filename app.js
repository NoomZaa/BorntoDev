const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get("/", (req,res) => {

    res.send('Hello Kittipong');

})

app.listen(port,()=>{
    console.log("Listening on port" + chalk.green(" : " + port));
})