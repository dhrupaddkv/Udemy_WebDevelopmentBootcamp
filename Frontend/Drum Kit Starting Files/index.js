function DrumButton(e, color, audioFile, backgroundImage) {
  this.buttonD = e;
  this.audioFile = audioFile;

  e.style.backgroundImage = "url(" + backgroundImage + ")";
  e.style.color = color;

  this.registerEvent = function(arg) {
    this.buttonD.addEventListener("click", function() {
      makeSound(arg);
    });
  };
}
// button handling
const cols = document.querySelectorAll("button.drum");

cols.forEach.call(cols, e => {
  var buttonLocal;
  switch (e.innerHTML) {
    case "w":
      buttonLocal = new DrumButton(e, "white", "sounds/tom-1.mp3", "images/tom1.png");
      break;
    case "a":
      buttonLocal = new DrumButton(e, "white", "sounds/tom-2.mp3", "images/tom2.png");
      break;
    case "s":
      buttonLocal = new DrumButton(e, "white", "sounds/tom-3.mp3", "images/tom3.png");
      break;
    case "d":
      buttonLocal = new DrumButton(e, "white", "sounds/tom-4.mp3", "images/tom4.png");
      break;
    case "j":
      buttonLocal = new DrumButton(e, "white", "kick-bass.mp3", "images/kick.png");
      break;
    case "k":
      buttonLocal = new DrumButton(e, "white", "sounds/snare.mp3", "images/snare.png");
      break;
    case "l":
      buttonLocal = new DrumButton(e, "white", "sounds/crash.mp3", "images/crash.png");
      break;
    default:
      console.log(e);
      break;
  }
  buttonLocal.registerEvent(buttonLocal.audioFile);
});

// keyboard handling
document.addEventListener("keypress", function(event) {
  var soundFile = "";
  switch (event.key) {
    case "w":
      soundFile = "sounds/tom-1.mp3";
      break;
    case "a":
      soundFile = "sounds/tom-2.mp3";
      break;
    case "s":
      soundFile = "sounds/tom-3.mp3";
      break;
    case "d":
      soundFile = "sounds/tom-4.mp3";
      break;
    case "j":
      soundFile = "sounds/kick-bass.mp3";
      break;
    case "k":
      soundFile = "sounds/snare.mp3";
      break;
    case "l":
      soundFile = "sounds/crash.mp3";
      break;
    default:
      console.log(event.key + "not available");
      break;
  }

  makeSound(soundFile);
});

function makeSound(arg) {
  if (arg.length > 0) {
    var audio = new Audio(arg);
    try {
      audio.play();
      console.log("Playing...");
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  }
}
