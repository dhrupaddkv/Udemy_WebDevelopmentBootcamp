const express = require("express");
const bodyParser = require("body-Parser");
const ejs = require("ejs");
const _ = require("lodash");

const hoeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

const contentContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
var posts = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  //res.sendFile(__dirname + "/index.html");
  var options = { homeContent: hoeStartingContent, posts: posts };
  res.render("home", options);
});

app.get("/about", function(req, res) {
  console.log("about hit");
  var options = { about_content: aboutContent };
  res.render("about", options);
});

app.get("/contact", function(req, res) {
  console.log("contact page hit");
  var options = { contact_content: contentContent };
  res.render("contact", options);
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  var postTitle = req.body.postTitle;
  var postBody = req.body.postBody;
  var post = {
    title: postTitle,
    content: postBody
  };
  posts.push(post);
  console.log(posts);
  res.redirect("/");
});

app.get("/post/:title", function(req, res) {
  var requestedTitle = req.params.title;
  posts.forEach(element => {
    if (_.lowerCase(element.title) == _.lowerCase(requestedTitle)) {
      console.log("post found");
      res.render("post", { title: element.title, content: element.content });
    } else {
      console.log("post not found");
    }
  });
});

app.listen(3000, function(params) {
  console.log("Blog app started");
});
