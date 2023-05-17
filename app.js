require("dotenv").config();

const express = require("express");
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');

const session = require("express-session");

const app = express();
const PORT = 5000 || process.env.PORT;

//connect to Database
connectDB();

app.use(express.static('public'));

//Temlating Engine
app.use(expressLayout);
app.set('layout', './layouts/mainLayout');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
}));



app.use('/', require('./server/routes/mainRoute'));
app.use('/', require('./server/routes/AdminRoute'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
