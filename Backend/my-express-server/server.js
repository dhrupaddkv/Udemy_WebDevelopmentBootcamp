const express = require("express");
const app = express();

app.get("/", function(request, response) {
  console.log(request);
  response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
  res.send("contact me at DKV!");
});

app.get("/about", function(req, res) {
  res.send("<h1>About</h1><p>my name is DKV</p>");
});

app.get("/hobbies", function(req, res) {
  res.send("MY favorite game cricket");
});
app.listen(3000, function() {
  console.log("server started at 3000");
});
