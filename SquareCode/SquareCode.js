var prompt = require('prompt-sync')();
var msgArray = [];
var n = prompt('Enter less than 82 characters to SquareCode' + '\n' + '>>>');
var rowLength = Math.ceil(Math.sqrt(n.length));
if (n.length > 0 && n.length < 82) {
  var i = 0;
  do {
    msgArray.push(n.slice((0 + i), (i + rowLength)));
    i += rowLength;
  } while (i < n.length + rowLength);
  console.log(msgArray);
} else {
  console.log("input must be less than 82 characters");
}