var randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var numberToGuess = randomNumber(0, 10);
var prompt = require("prompt-sync")();
console.log(numberToGuess);

while (answer !== numberToGuess) {
  var answer = prompt("Guess the number between 0 and 10 or enter x to exit\n>");
  answer = parseInt(answer);
  console.log(typeof(answer));
  if (answer === numberToGuess) {
    console.log ("Congratuations that is the correct answer");
  } else if (answer < numberToGuess){
    console.log("Try guessing a higher number");
  } else if (answer > numberToGuess) {
    console.log("Try guessing a lower number");
  } else
    break;
}
