const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {

  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

module.exports = router;
