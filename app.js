const express = require('express');
//const color_text = require('chalk');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("Hello DevPAI 555");
})

app.listen(port, ()=>{
    debug("Litening on port ", port);
})