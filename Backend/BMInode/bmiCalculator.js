const express = require("express");
const bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / Math.pow(height, 2);
  res.send("BMI for you is:" + bmi);
});
app.listen(3000, function(params) {
  console.log("server running at 3000 port");
});
