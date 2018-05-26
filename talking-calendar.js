// You'll be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. You'll be expected to parse the given string and produce a human readable date.

var talkingCalendar = function(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

function findOrdinal(d) {
  if(d>3 && d<21) return 'th';
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    };

  var year = date.slice(0,4);
  var month = months[date.slice(5,7) - 1];
  if (date.slice(8,9) === "0"){
    var day = date.slice(9);
  }else{
    var day = date.slice(8);
  };
  var ordinal = findOrdinal(day);
  var newDateFormat = month + " " + day + ordinal + ", " + year;
  return newDateFormat;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Expected outputs
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987