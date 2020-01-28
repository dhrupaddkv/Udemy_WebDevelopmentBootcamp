$(document).ready(function() {
  $("h1").css("color", "red");
  $("h1").addClass("bigtitle margintitle");
  $("button").text("button content");
  $("button").html("<em>what</em>");
  $("img").attr("src");
  $("a").attr("href", "http://www.yahoo.com");
  $("h1").click(function() {
    $("h1").css("color", "purple");
  });
  $("button").click(function() {
    console.log("button clicked");
  });
  $("#specialtext").keypress(function(event) {
    console.log(event.key + " pressed");
    event.stopPropagation();
    return true;
  });
  $(document).keypress(function(event) {
    $("h1").text($("h1").text() + event.key);
  });
  $("h1").on("mouseover", function(event) {
    $("h1").toggleClass("bigtitle");
  });
});
