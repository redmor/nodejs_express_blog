require("dotenv").config();

const express = require("express");
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

//Temlating Engine
app.use(expressLayout);
app.set('layout', './layouts/mainLayout');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/mainRoute'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
