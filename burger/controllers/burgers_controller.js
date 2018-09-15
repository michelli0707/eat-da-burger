var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create all routes 
router.get("/menu", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    };

    res.render("index", burgerObject);
  });
});

router.post("/add", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/update/:id", function(req, res) {
  var updateItem = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, updateItem, function() {
    res.redirect("/");
  });
});

router.delete("/delete/:id", function(req, res) {
  var deleteItem = "id = " + req.params.id;

  burger.delete(deleteItem, function() {
    res.redirect("/");
  });
});

// Export routes 
module.exports = router;