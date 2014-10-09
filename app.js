$('document').ready(function() {
  var debug = function(message) {
  console.log("Debug", message);
  };

  var numberChoice = function() {
    prompt("Please choose a number.");
  };
  numberChoice();

  var integer = +numberChoice;

  if (isNaN(integer)) {
    alert("That is not a number! Please type in a number using numerical digits.");
    numberChoice();
  } else if (integer % 1 !== 0) {
    alert("Please choose a whole number integer.");
    numberChoice();
  }

  var myArray = [];

  var count = function(range) {
    for (var i = 0; i <= (range-1); i++) {
      var num = i + 1;
      if (((num % 3) + (num % 5)) === 0) {
        myArray[i] = "fizz buzz";
      } else if ((num % 3) === 0) {
        myArray[i] = "fizz";
      } else if ((num % 5) === 0) {
        myArray[i] = "buzz";
      } else {
        myArray[i] = num;
      }
      $('<p>').html(myArray[i]).appendTo('.test');
    }
  };
  count(integer);
});
