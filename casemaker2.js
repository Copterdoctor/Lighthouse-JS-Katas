// This an extension to the previous Case Maker kata. Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.

// You'll still be given an input string to convert. However, this time, you'll also be given a casing style to work with. The following code block will describe all the casing styles to support. You may also receive an array of casing styles, and each of these should be applied.

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

//   1.  camel, pascal, snake, kebab, title
//   2.  vowel, consonant
//   3.  upper, lower

var makeCase = function (string, format) {
  if (format.length === 2) {
    var changeCondition1 = format[0];
    var changeCondition2 = format[1];
    var stringCased = changeCase(format[1]);
    switch (format[0]) {
      case "upper":
        var stringCased2 = stringCased.toUpperCase();
        return stringCased2;
        break;

      case "lower":
        var stringCased2 = stringCased.toLowerCase();
        return stringCased2;
        break;

      default:
        return "";
        break;
    }
  } else {
    return changeCase(format);
  }
  function changeCase(a) {
    switch (a) {
      case "camel": {
        var inputArray = string.split(" ");
        var arrayOfStrings = [];
        var outputString = "";
        for (let i = 1; i < inputArray.length; i++) { // Loop through input string
          var str = inputArray[i];
          for (let j = 0; j < str.length; j++) { // Loop through each word from input sting
            var strArray = [...str]; // Convert string to array of Char's
            var char = strArray.shift(); // remove first Char and assign to var char
            char = char.toUpperCase();
            strArray.unshift(char); // add Capitalized char back to [0] position
            concatString = strArray.join("");
          }
          arrayOfStrings.push(concatString);
        }
        arrayOfStrings.unshift(inputArray[0]);
        outputString = arrayOfStrings.join("");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "pascal": {
        var inputArray = string.split(" ");
        var arrayOfStrings = [];
        var outputString = "";
        for (let i = 0; i < inputArray.length; i++) { // Loop through input string
          var str = inputArray[i];
          for (let j = 0; j < str.length; j++) { // Loop through each word from input sting
            var strArray = [...str]; // Convert string to array of Char's
            var char = strArray.shift(); // remove first Char and assign to var char
            char = char.toUpperCase();
            strArray.unshift(char); // add Capitalized char back to [0] position
            concatString = strArray.join("");
          }
          arrayOfStrings.push(concatString);
        }
        outputString = arrayOfStrings.join("");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "snake": {
        var inputArray = string.split(" ");
        outputString = inputArray.join("_");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "kebab": {
        var inputArray = string.split(" ");
        outputString = inputArray.join("-");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "title": {
        var inputArray = string.split(" ");
        var arrayOfStrings = [];
        var outputString = "";
        for (let i = 0; i < inputArray.length; i++) { // Loop through input string
          var str = inputArray[i];
          for (let j = 0; j < str.length; j++) { // Loop through each word from input sting
            var strArray = [...str]; // Convert string to array of Char's
            var char = strArray.shift(); // remove first Char and assign to var char
            char = char.toUpperCase();
            strArray.unshift(char); // add Capitalized char back to [0] position
            concatString = strArray.join("");
          }
          arrayOfStrings.push(concatString);
        }
        outputString = arrayOfStrings.join(" ");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "vowel": {
        var inputArray = string.split(" ");
        var arrayOfStrings = [];
        var outputString = "";
        for (let i = 0; i < inputArray.length; i++) { // Loop through input string
          var str = inputArray[i];
          for (let j = 0; j < str.length; j++) { // Loop through each word from input sting
            var strArray = [...str]; // Convert string to array of Char's
            for (let k = 0; k < strArray.length; k++) {
              if (strArray[k] === 'a' || strArray[k] === 'e' || strArray[k] === 'i' || strArray[k] === 'o' || strArray[k] === 'u') {
                var char = strArray[k];
                char = char.toUpperCase();
                strArray[k] = char;
              }
            }
            concatString = strArray.join("");
          }
          arrayOfStrings.push(concatString);
        }
        outputString = arrayOfStrings.join(" ");
        // console.log(outputString);
        return outputString;
        break;
      }
      case "consonant": {
        var inputArray = string.split(" ");
        var arrayOfStrings = [];
        var outputString = "";
        for (let i = 0; i < inputArray.length; i++) { // Loop through input string
          var str = inputArray[i];
          for (let j = 0; j < str.length; j++) { // Loop through each word from input sting
            var strArray = [...str]; // Convert string to array of Char's
            for (let k = 0; k < strArray.length; k++) {
              if (strArray[k] !== 'a' && strArray[k] !== 'e' && strArray[k] !== 'i' && strArray[k] !== 'o' && strArray[k] !== 'u') {
                var char = strArray[k];
                char = char.toUpperCase();
                strArray[k] = char;
              }
            }
            concatString = strArray.join("");
          }
          arrayOfStrings.push(concatString);
        }
        outputString = arrayOfStrings.join(" ");
        // console.log(outputString);
        return outputString;
        break;
      }

      default:
        return "";
        break;
    }
  }
};

console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");