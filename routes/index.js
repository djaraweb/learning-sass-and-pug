var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cssgrid", function (req, res, next) {
  res.render("cssgrid", { title: "CSS GRID" });
});
router.get("/cssgridpractice", function (req, res, next) {
  res.render("cssgridpractice", { title: "CSS GRID - Practica" });
});
router.get("/testimonials", function (req, res, next) {
  res.render("testimonials", { title: "Fontermentor.io - Testimonials" });
});

module.exports = router;
