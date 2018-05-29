// This an extension to the previous Case Maker kata. Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.

// You'll still be given an input string to convert. However, this time, you'll also be given a casing style to work with. The following code block will describe all the casing styles to support. You may also receive an array of casing styles, and each of these should be applied.

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

//   1.  camel, pascal, snake, kebab, title
//   2.  vowel, consonant
//   3.  upper, lower

var makeCase = function(string, stringCase) {
  var inputArray = string.split(" ");
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

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");