// You'll be given a string which you'll have to convert to Camel Case. Return the resulting value from your function.

var camelCase = function(input) {
  var inputArray = input.split(" ");
  var arrayOfStrings = [];
  var outputString = "";
  for (let i = 1; i < inputArray.length; i++) {
    var str = inputArray[i];
    for (let j = 0; j < str.length; j++) {
      var strArray = [...str];
      var char = strArray.shift();
      char = char.toUpperCase();
      strArray.unshift(char);
      concatString = strArray.join("");
    }
    arrayOfStrings.push(concatString);
  }
  arrayOfStrings.unshift(inputArray[0]);
  outputString = arrayOfStrings.join("");
  return outputString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// EXPECTED OUTPUTS
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
