// You'll be given a number, this is the highest value of your multiplication table. Your job is to generate a multiplication table for the values from 1 to the provided value.

// Each cell should have the same size, as well as at least 1 space of padding around each value.

// Your function should be called multiplicationTable and it should return a string for the multiplication table output. Do not use console.log inside the function.

var multiplicationTable = function (maxValue) {
  var output = "";
  var y = 1;
  var maxNum = maxValue * maxValue;
  var row = ("+--" + "-".repeat(maxNum.toString().length - y.toString().length + 1)).repeat(maxValue) + "\+\n";
  output += row;
  for (i = 1; i <= maxValue; i++) {
    if (i == maxValue) {
      output += "| " + (y * maxValue) + " ".repeat(maxNum.toString().length - (y * maxValue).toString().length + 1) + "|\n";
      output += row;
      y++;
      if (y > maxValue) {
        break;
      }
      else
        output += "| " + y + " ".repeat(maxNum.toString().length - y.toString().length + 1);
      i = 1
    }
    else
      output += "| " + (i * y) + " ".repeat(maxNum.toString().length - (i * y).toString().length + 1);
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

// +---+
// | 1 |
// +---+

// +----+----+----+----+----+
// | 1  | 2  | 3  | 4  | 5  |
// +----+----+----+----+----+
// | 2  | 4  | 6  | 8  | 10 |
// +----+----+----+----+----+
// | 3  | 6  | 9  | 12 | 15 |
// +----+----+----+----+----+
// | 4  | 8  | 12 | 16 | 20 |
// +----+----+----+----+----+
// | 5  | 10 | 15 | 20 | 25 |
// +----+----+----+----+----+

// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 18  | 20  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 3   | 6   | 9   | 12  | 15  | 18  | 21  | 24  | 27  | 30  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 4   | 8   | 12  | 16  | 20  | 24  | 28  | 32  | 36  | 40  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 5   | 10  | 15  | 20  | 25  | 30  | 35  | 40  | 45  | 50  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 6   | 12  | 18  | 24  | 30  | 36  | 42  | 48  | 54  | 60  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 7   | 14  | 21  | 28  | 35  | 42  | 49  | 56  | 63  | 70  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 8   | 16  | 24  | 32  | 40  | 48  | 56  | 64  | 72  | 80  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 9   | 18  | 27  | 36  | 45  | 54  | 63  | 72  | 81  | 90  |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
// | 10  | 20  | 30  | 40  | 50  | 60  | 70  | 80  | 90  | 100 |
// +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+