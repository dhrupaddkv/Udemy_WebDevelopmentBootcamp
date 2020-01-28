$(document).ready(function(params) {
  // variables
  var buttonColors = new Array("red", "blue", "green", "yellow");
  var gamePattern = new Array();
  var userClickedPattern = new Array();
  var level = 0;
  // functions and events
  function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    $("#" + buttonColors[randomNumber])
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    makeSound(buttonColors[randomNumber]);
    level += 1;
    $("h1").text("Level " + level);
  }
  function makeSound(arg) {
    if (arg.length > 0) {
      var audio = new Audio("sounds/" + arg + ".mp3");
      try {
        audio.play();
        console.log("Playing...");
      } catch (err) {
        console.log("Failed to play..." + err);
      }
    }
  }
  function animatePress(params) {
    $(params).addClass("pressed");
    setTimeout(function() {
      $(params).removeClass("pressed");
    }, 200);
  }
  function checkAnswer(currentLevel) {
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length) {
        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function() {
          nextSequence();
        }, 200);
      }
    } else {
      makeSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 1000);
      console.log("wrong");
    }
  }
  $("div[type='button']").on("click", function(params) {
    var userClickedColor = $(this).attr("id");
    makeSound(userClickedColor);
    animatePress(this);
    userClickedPattern.push(userClickedColor);
    checkAnswer(level);
    console.log(userClickedPattern);
  });

  $(document).on("keypress", function(params) {
    nextSequence();
  });
});
