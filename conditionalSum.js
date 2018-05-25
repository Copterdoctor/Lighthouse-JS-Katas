// For this kata, you'll be adding only the numbers in the array which match the given condition.

// You'll be given an array of numbers and a condition, such as odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

// Do not use Array.prototype.filter()

var conditionalSum = function(values, condition) {
  var result = 0;
    if (condition === "even") {
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
          result += values[i];
        } 
      }
    } else if (condition === "odd") {
      if (condition === "odd") {
        for (let i = 0; i < values.length; i++) {
          if (values[i] % 2 !== 0) {
            result += values[i];
        }
      }
    }
  }
  return result;
};
                                                          // Expected Output
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));     // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));      // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));// 144
console.log(conditionalSum([], "odd"));                   // 0