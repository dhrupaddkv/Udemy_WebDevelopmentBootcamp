var express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
  //res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  var result = parseInt(req.body.num1, 10) + parseInt(req.body.num2, 10);
  res.send("Sum if numbers is " + result);
});
app.listen(3000, function(req, res) {
  console.log("Server running at port 3000");
});
