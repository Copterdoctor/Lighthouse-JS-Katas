var randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var numberToGuess = randomNumber(0, 10);
var attempts = 1;
var prompt = require("prompt-sync")();

while (answer !== numberToGuess) {
  console.log("Guess the number between 0 and 10 or enter 66 to kill program.");
  var answer = prompt("Attempt #" + attempts + ">");
  answer = parseInt(answer);
  if (answer === numberToGuess) {
    console.log ("Congratuations that is the correct answer");
  } else if (answer === 66){
    console.log("Goodbye");
    break;
  } else if (answer < numberToGuess){
    console.log("Try guessing a higher number");
    attempts++;
  } else if (answer > numberToGuess) {
    console.log("Try guessing a lower number");
    attempts++;
  }
}
