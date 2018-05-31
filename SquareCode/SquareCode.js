var squareCode = function (n) {
  var numCharPerRow = Math.ceil(Math.sqrt(n.length));
  if (n.length > 0 && n.length < 82) {
    var msgArray = [];
    var charCounter = 0;
    do {
      msgArray.push(n.slice((0 + charCounter), (charCounter + numCharPerRow)));
      charCounter += numCharPerRow;
    } while (charCounter < n.length + numCharPerRow);
    msgArray.pop();

    for (let i = 0; i < msgArray.length; i++) {
      var word = msgArray[i];
      msgArray.splice(i, 1);
      msgArray.splice(i, 0, word.split(''));
    }

    var output = '';
    for (let i = 0; i < numCharPerRow; i++) {
      var str = '';
      for (let j = 0; j < msgArray.length; j++) {
        if (msgArray[j][i] !== undefined) {
          str += msgArray[j][i];
        }
      }
      output += str + " ";
    }
    return output;

  } else {
    console.log("input must be less than 82 characters");
  }
};

var prompt = require('prompt-sync')();
var userInput = prompt('Enter less than 82 characters to SquareCode' + '>>>');
console.log(squareCode(userInput));