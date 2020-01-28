function getandomRumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function SetDiceImage(param) {
  var randomNumber = getandomRumber();
  document
    .querySelector(param)
    .setAttribute("src", "images/dice".concat(randomNumber, ".png"));
  return randomNumber;
}

var dice1 = SetDiceImage(".img1");
var dice2 = SetDiceImage(".img2");
var resultVar = document.querySelector(".refreshme");
if (dice1 < dice2) {
  resultVar.innerHTML = "Player 2 Wins!";
} else if (dice1 > dice2) {
  resultVar.innerHTML = "Player 1 Wins!";
} else {
  resultVar.innerHTML = "Draw!";
}
