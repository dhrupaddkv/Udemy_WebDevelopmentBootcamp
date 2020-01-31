const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(3000, function() {
  console.log("Server started at 3000 port");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/failure", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  console.log(res);
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var data = {
    members: [{ email_address: email, status: "subscribed", merge_fields: { FNAME: firstname, LNAME: lastname } }]
  };
  var jsonData = JSON.stringify(data);
  var option = {
    url: "https://us4.api.mailchimp.com/3.0/lists/getkey",
    method: "POST",
    headers: {
      Authorization: "DKV get key"
    }
    // body: jsonData
  };
  request(option, function(error, response, body) {
    if (error) {
      console.log(error);
      res.sendFile(__dirname + "/failure.html");
    } else {
      console.log(response.statusCode);
      if (response.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
  console.log(firstname + " " + lastname + " " + email);
});
