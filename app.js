const express = require('express');
//const color_text = require('chalk');
const debug = require('debug')('app');
const app = express();
const PORT = process.env.PORT;
const path = require('path')

app.use(express.static(path.join(__dirname, "public")));
app.set("views","./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index',{username: 'PaiZa555+'});
})

app.listen(PORT, () => {
    debug("Litening on port ", PORT);
})