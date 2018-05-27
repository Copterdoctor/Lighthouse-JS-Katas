// You'll be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Your function calculateChange should return an object which describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

// N.B. Although pennies are not used in circulation, still calculate the amount of pennies to give back.

// Valid denominations are as follows:

//     Twenty dollars
//     Ten dollars
//     Five dollars
//     Two dollars
//     One dollar
//     Quarter (25¢)
//     Dime (10¢)
//     Nickel (5¢)
//     Penny (1¢)

var calculateChange = function(total, cash) {
  var change = {};
  if (cash >= total) {
    cash -= total;
    while (cash > 0) {
        if (cash >= 2000) {
          if (!change.twenty){
            change.twenty = 0;
          }
          change.twenty += 1;
          cash -= 2000;
          continue;
        }
        if (cash >= 1000) {
          if (!change.ten){
            change.ten = 0;
          }
          change.ten += 1;
          cash -= 1000;
          continue;
        }
        if (cash >= 500) {
          if (!change.five){
            change.five = 0;
          }
          change.five += 1;
          cash -= 500;
          continue;
        }
        if (cash >= 200) {
          if (!change.twoDollar){
            change.twoDollar = 0;
          }
          change.twoDollar += 1;
          cash -= 200;
          continue;
        }
        if (cash >= 100) {
          if (!change.dollar){
            change.dollar = 0;
          }
          change.dollar += 1;
          cash -= 100;
          continue;
        }
        if (cash >= 25) {
          if (!change.quarter){
            change.quarter = 0;
          }
          change.quarter += 1;
          cash -= 25;
          continue;
        }
        if (cash >= 10) {
          if (!change.dime){
            change.dime = 0;
          }
          change.dime += 1;
          cash -= 10;
          continue;
        }
        if (cash >= 5) {
          if (!change.nickel){
            change.nickel = 0;
          }
          change.nickel += 1;
          cash -= 5;
          continue;
        }
        if (cash >= 1) {
          if (!change.penny){
            change.penny = 0;
          }
          change.penny += 1;
          cash -= 1;
          continue;
        }
    }
    return change;
  }else{
    return "Not enough cash to pay bill";
  }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Outputs
// { twoDollar: 1, dime: 1, penny: 3 }
// { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }