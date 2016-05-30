var unique = require('unique-random-array');

var tab = ["Alex", "Marc", "Vincent", "Pierre", "Paul", "Jacques"];
module.exports = {
  hello: function () {
    console.log("hello " + unique(tab)());
  }
}
