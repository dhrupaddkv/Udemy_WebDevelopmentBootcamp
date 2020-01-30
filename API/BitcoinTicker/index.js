const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log("server inti at 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.crypto);
  request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCINR", function(error, response, body) {
    console.log("DKV");
    console.log(response.statusCode);
    var jsondata = JSON.parse(body);
    var lastprice = jsondata.last;
    console.log(lastprice);
  });
});
