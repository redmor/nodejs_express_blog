const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/adminLayout';

//GET
// Admin - login Page

router.get("/admin", async (req, res) => {
    try {
      res.render("pages/admin", {layout: adminLayout});
    } catch (error) {
      console.log(error);
    }
  });



//POST
// Admin - check login

router.post("/admin", async (req, res) => {
  try {

    const {username, password} = req.body;



    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});


//POST
// Admin - register

router.post("/register", async (req, res) => {
  try {

    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({username, password: hashedPassword});
      res.status(201).json({message: 'User Created', user});
    } catch (error) {
      res.status(409).json({message: 'User Already in use'});
    }
    res.status(500).json({message: 'Internal server error'});

  } catch (error) {
    console.log(error);
  }
});



module.exports = router;