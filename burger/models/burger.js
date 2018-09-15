var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(col, val, cb) {
    orm.create("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(objectColVal, conditionVal, cb) {
    orm.update("burgers", objectColVal, conditionVal, function(res) {
      cb(res);
    });
  },
  delete: function(objectColVal, conditionVal, cb) {
    orm.delete("burgers", objectColVal, conditionVal, function(res) {
      cb(res);
    });
  },
};

// Export database functions for the controller
module.exports = burger;