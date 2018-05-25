// You'll be given a two dimensional array (an array of arrays), each sub-array will only have two values. The first will be the value to repeat, the second will be the amount of times to repeat that value.

// Your function repeatNumbers should return a string with each of the given values repeated the appropriate number of times, each set of values separated by a comma. If there is only one set of values then you should omit the comma.

var repeatNumbers = function(data) {
  var output = "";
  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      output += ",";
    }
    for (let j = 0; j < data[i][1]; j++) {
      output += data[i][0];
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));