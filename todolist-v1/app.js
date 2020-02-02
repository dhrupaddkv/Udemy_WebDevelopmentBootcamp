const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
var items = ["Buy", "Eat"];
app.listen("3000", function(params) {
  console.log("Started app at port 3000");
});

app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", { day: day, newTODOItems: items });
});
app.post("/", function(req, res) {
  items.push(req.body.newitem);
  res.redirect("/");
});
